import React from 'react'

import InputLabel from '../InputLabel'
import styles from './TextInput.css'

class TextInput extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const value = this._element.value
    const {changeCallback} = this.props

    changeCallback(value)
  }

  render () {
    const {
      label,
      error,
      value,
      placeholder,
      disabled = false,
      type = 'text'
    } = this.props

    return (
      <label className={styles.TextInput}>
        {label
          ? <InputLabel label={label} error={error} />
          : null
        }

        <input ref={el => { this._element = el }}
          value={value}
          className={`${styles.TextInput__input} ${error ? styles.TextInput__input_error : null}`}
          disabled={disabled}
          type={type}
          onChange={this.onChange}
          placeholder={placeholder} />
      </label>
    )
  }
}

export default TextInput
