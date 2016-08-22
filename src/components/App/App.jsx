import React from 'react'
import io from 'socket.io-client'

import styles from './App.css'

import Flex from '../../layouts/Flex'
import Block from '../../layouts/Block'

import InputGroup from '../../UI/InputGroup'
import InlineGroup from '../../UI/InlineGroup'
import LabelFirstGroup from '../../UI/LabelFirstGroup'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Checkbox from '../../UI/Checkbox'
import Radio from '../../UI/Radio'
import Button from '../../UI/Button'

const socket = io('https://vdziubak.com/', {path: '/designFixationServer'})

const TASK_1 = 'conservatory'
const TASK_2 = 'planetarium'
const TASK_3 = 'cars'
const CONDITION_1 = 'system'
const CONDITION_2 = 'baseline'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.startSession = this.startSession.bind(this)
    this.endSession = this.endSession.bind(this)

    this.state = {
      sessionActive: false,
      participantId: '',
      condition: CONDITION_1,
      taskAlias: TASK_1
    }
  }

  componentDidMount () {
    socket.emit('get study')

    socket.on('study', (data) => {
      this.setState({
        sessionActive: true,
        participantId: data.participantId,
        condition: data.condition,
        taskAlias: data.taskAlias
      })
    })
  }

  startSession () {
    socket.emit('create study', {
      participantId: this.state.participantId,
      condition: this.state.condition,
      taskAlias: this.state.taskAlias
    })

    console.log({
      participantId: this.state.participantId,
      condition: this.state.condition,
      taskAlias: this.state.taskAlias
    })

    this.setState({
      sessionActive: true
    })
  }

  endSession () {
    socket.emit('kill study')

    this.setState({
      sessionActive: false
    })
  }

  render () {
    return (
      <div className={styles.App}>
        <Flex
          alignItems="center"
          justifyContent="center">
          <div className={styles.Form}>
            <Block>
              <InputGroup
                label="Participant Name"
                input={
                  <Input
                    disabled={this.state.sessionActive}
                    value={this.state.participantId}
                    onChange={(v) => this.setState({participantId: v})} />
                } />
            </Block>

            <Block>
              <InputGroup
                label="Condition"
                input={
                  <Select
                    options={[
                      {
                        value: CONDITION_1,
                        label: CONDITION_1
                      },
                      {
                        value: CONDITION_2,
                        label: CONDITION_2
                      }
                    ]}
                    value={this.state.condition}
                    disabled={this.state.sessionActive}
                    onChange={(v) => this.setState({condition: v})} />
                } />
            </Block>

            <Block n={2}>
              <InputGroup
                label="Task"
                input={
                  <Select
                    options={[
                      {
                        value: TASK_1,
                        label: TASK_1
                      },
                      {
                        value: TASK_2,
                        label: TASK_2
                      },
                      {
                        value: TASK_3,
                        label: TASK_3
                      }
                    ]}
                    value={this.state.taskAlias}
                    disabled={this.state.sessionActive}
                    onChange={(v) => this.setState({taskAlias: v})} />
                } />
            </Block>

            {
              this.state.sessionActive
              ? <Button
                fullWidth
                theme="error"
                text="End Session"
                onClick={this.endSession} />
              : <Button
                fullWidth
                theme="accent1"
                text="Start Session"
                onClick={this.startSession} />
            }
          </div>
        </Flex>
      </div>
    )
  }
}

export default App
