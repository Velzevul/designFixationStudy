import React from 'react'
import io from 'socket.io-client'

import styles from './App.css'

import Flex from '../../layouts/Flex'
import Block from '../../layouts/Block'

import InputGroup from '../../UI/InputGroup'
import InlineGroup from '../../UI/InlineGroup'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Checkbox from '../../UI/Checkbox'
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
      participantId: '',
      sessionId: null,
      condition: CONDITION_1,
      taskAlias: TASK_1,
      training: false,
      log: []
    }
  }

  componentDidMount () {
    socket.emit('get study')

    socket.on('study', (data) => {
      console.log('here')
      this.setState({
        sessionId: data.sessionId,
        participantId: data.participantId,
        condition: data.condition,
        taskAlias: data.taskAlias,
        training: data.training,
        log: [
          ...this.state.log,
          `${data.training ? 'training' : ''} session ${data.sessionId}`
        ]
      })
    })

    socket.on('confirm kill study', () => {
      this.setState({
        sessionId: null,
        log: [
          ...this.state.log,
          'session killed'
        ]
      })
    })

    socket.on('confirm create example', example => {
      this.setState({
        log: [
          ...this.state.log,
          `created example '${example.imageDescription}' for query '${example.query}'`
        ]
      })
    })

    socket.on('confirm create query', query => {
      this.setState({
        log: [
          ...this.state.log,
          `created query ${query.query}`
        ]
      })
    })
  }

  startSession () {
    socket.emit('create study', {
      participantId: this.state.participantId,
      condition: this.state.condition,
      taskAlias: this.state.taskAlias,
      training: this.state.training
    })
  }

  endSession () {
    socket.emit('kill study')
  }

  render () {
    return (
      <div className={styles.App}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center">
          <Block n={2}>
            <div className={styles.Form}>
              <Block>
                <InlineGroup
                  label="Training"
                  input={
                    <Checkbox
                      disabled={this.state.sessionId}
                      checked={this.state.training === true}
                      onChange={() => this.setState({training: !this.state.training, taskAlias: TASK_3})} />
                  } />
              </Block>

              <Block>
                <InputGroup
                  label="Participant Name"
                  input={
                    <Input
                      disabled={this.state.sessionId}
                      value={this.state.participantId}
                      onChange={(v) => this.setState({participantId: v})} />
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
                      disabled={this.state.sessionId || this.state.training}
                      onChange={(v) => this.setState({taskAlias: v})} />
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
                      disabled={this.state.sessionId}
                      onChange={(v) => this.setState({condition: v})} />
                  } />
              </Block>

              {
                this.state.sessionId
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
          </Block>

          {this.state.log.slice(-5).map((l, index) => <div key={index}>{l}</div>)}
        </Flex>
      </div>
    )
  }
}

export default App
