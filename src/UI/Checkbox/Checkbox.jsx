import React from 'react'

import styles from './Checkbox.css'

class Checkbox extends React.Component {
  render () {
    const {
      checked,
      onChange,
      disabled = false
    } = this.props

    return (
      <input className={styles.Checkbox}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
    )
  }
}

export default Checkbox
