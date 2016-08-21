import React from 'react'

import styles from './LabelFirstGroup.css'

const LabelFirstGroup = ({
  label,
  error,
  input,
  labelWidth = '5rem'
}) => {
  let errorEl = ''
  if (error) {
    errorEl = (
      <div className={styles.LabelFirstGroup__error}>{error}</div>
    )
  }

  return (
    <label className={styles.LabelFirstGroup}>
      <div
        style={{width: labelWidth}}
        className={styles.LabelFirstGroup__label}>{label}</div>

      <div className={styles.LabelFirstGroup__input}>
        {input}
        {errorEl}
      </div>

    </label>
  )
}

export default LabelFirstGroup
