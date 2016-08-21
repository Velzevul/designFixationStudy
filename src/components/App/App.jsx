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
const CONDITION_1 = 'system'
const CONDITION_2 = 'baseline'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      disabled: true,
      error: false,
      participantId: 'vasa',
      taskAlias: TASK_1,
      condition: CONDITION_1
    }
  }

  // componentDidMount () {
  //   socket.emit('get study')
  //
  //   socket.on('study', (data) => {
  //     this.setState({
  //       participantId: data.participantId,
  //       taskAlias: data.taskAlias,
  //       condition: data.condition
  //     })
  //   })
  // }
  //
  // startStudy () {
  //   socket.emit('create study', this.state)
  // }
  //
  // endStudy () {
  //   socket.emit('kill study')
  // }

  render () {
    return (
      <Flex
        alignItems="center"
        justifyContent="center">
        <div className={styles.Form}>
          <Block>
            <div>{this.state.participantId}</div>
            <div>{this.state.taskAlias}</div>
            <div>{this.state.condition}</div>
          </Block>

          <Block>
            <InlineGroup
              label="Disabled"
              input={
                <Checkbox
                  checked={this.state.disabled}
                  onChange={(v) => { this.setState({disabled: !this.state.disabled}) }} />
              } />

            <InlineGroup
              label="Error"
              input={
                <Checkbox
                  checked={this.state.error}
                  onChange={(v) => { this.setState({error: this.state.error ? null : 'error'}) }} />
              } />
          </Block>

          <Block>
            <LabelFirstGroup
              label="Input group"
              error={this.state.error}
              input={
                <Input
                  disabled={this.state.disabled}
                  error={this.state.error}
                  value={this.state.participantId}
                  onChange={(v) => {
                    this.setState({participantId: v})
                    this.setState({error: null})
                  }} />
              } />
          </Block>

          <Block>
            <InputGroup
              label="Input group (select)"
              error={this.state.error}
              input={
                <Select
                  disabled={this.state.disabled}
                  error={this.state.error}
                  value={this.state.taskAlias}
                  options={[
                    {
                      label: TASK_1,
                      value: TASK_1
                    },
                    {
                      label: TASK_2,
                      value: TASK_2
                    }
                  ]}
                  onChange={(v) => { this.setState({taskAlias: v}) }} />
              } />
          </Block>

          <Block>
            <InlineGroup
              error={this.state.error}
              label={CONDITION_1}
              input={
                <Radio
                  disabled={this.state.disabled}
                  checked={this.state.condition === CONDITION_1}
                  onChange={(v) => { this.setState({condition: CONDITION_1}) }} />
              } />

            <InlineGroup
              error={this.state.error}
              label={CONDITION_2}
              input={
                <Radio
                  disabled={this.state.disabled}
                  checked={this.state.condition === CONDITION_2}
                  onChange={(v) => { this.setState({condition: CONDITION_2}) }} />
              } />
          </Block>

          <Button
            text="Button"
            disabled={this.state.disabled}
            onClick={() => { window.alert('button') }} />

          <Button
            theme="accent1"
            text="Button"
            disabled={this.state.disabled}
            onClick={() => { window.alert('button') }} />

          <Button
            theme="accent2"
            text="Button"
            disabled={this.state.disabled}
            onClick={() => { window.alert('button') }} />

          <Button
            theme="error"
            text="Button"
            disabled={this.state.disabled}
            onClick={() => { window.alert('button') }} />

          <Button
            theme="success"
            text="Button"
            disabled={this.state.disabled}
            onClick={() => { window.alert('button') }} />
        </div>
      </Flex>
    )
  }
}

export default App
