import React from 'react'

import styles from './InputGroup.css'

const InputGroup = ({
  label,
  error,
  input
}) => {
  let errorEl = ''
  if (error) {
    errorEl = (
      <div className={styles.InputGroup__error}>{error}</div>
    )
  }

  return (
    <label className={styles.InputGroup}>
      <div className={styles.InputGroup__label}>{label}</div>

      <div className={styles.InputGroup__input}>
        {input}
        {errorEl}
      </div>
    </label>
  )
}

export default InputGroup
