import React from 'react'

import styles from './Input.css'

class Input extends React.Component {
  constructor (props) {
    super(props)

    this.change = this.change.bind(this)
  }

  change () {
    const value = this._element.value
    const {onChange} = this.props

    onChange(value)
  }

  render () {
    const {
      value,
      type = 'text',
      placeholder = '',
      disabled = false,
      error = null
    } = this.props

    let classNames = [styles.Input]
    if (error) {
      classNames.push(styles.Input_error)
    }

    return (
      <input
        className={classNames.join(' ')}
        ref={el => { this._element = el }}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onChange={this.change} />
    )
  }
}

export default Input
