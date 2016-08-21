import React from 'react'

import styles from './Radio.css'

class Radio extends React.Component {
  render () {
    const {
      checked,
      onChange,
      disabled = false
    } = this.props

    return (
      <input className={styles.Radio}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
    )
  }
}

export default Radio
