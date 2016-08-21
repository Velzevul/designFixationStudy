import React from 'react'

import styles from './InlineGroup.css'

const InlineGroup = ({
  label,
  error,
  input
}) => {
  let errorEl = ''
  if (error) {
    errorEl = (
      <div className={styles.InlineGroup__error}>{error}</div>
    )
  }

  return (
    <label className={styles.InlineGroup}>
      <div className={styles.InlineGroup__input}>
        {input}
      </div>

      <div className={styles.InlineGroup__label}>
        <div className={styles.InlineGroup__label}>{label}</div>
        
        {errorEl}
      </div>
    </label>
  )
}

export default InlineGroup
