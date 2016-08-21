import React from 'react'

import styles from './Select.css'

class Select extends React.Component {
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
      options,
      error,
      value,
      disabled
    } = this.props

    const selectedOption = options.filter(o => o.value === value)[0]
    const inputLabel = selectedOption ? selectedOption.label : options[0].label

    let classNames = [styles.Select]
    if (disabled) {
      classNames.push(styles.Select_disabled)
    }
    if (error) {
      classNames.push(styles.Select_error)
    }

    return (
      <div className={classNames.join(' ')}>
        <div className={styles.Select__fake}>{inputLabel}</div>

        <select
          className={styles.Select__input}
          ref={el => { this._element = el }}
          value={value}
          disabled={disabled}
          onChange={this.change}>
          {options.map((o, index) =>
            <option key={index} value={o.value}>{o.label}</option>
          )}
        </select>
      </div>
    )
  }
}

export default Select
