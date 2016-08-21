import React from 'react'

import styles from './Button.css'

const Button = ({
  text,
  onClick,
  theme,
  fullWidth = false,
  disabled = false
}) => {
  let classNames = [styles.Button]
  if (fullWidth) {
    classNames.push(styles.Button_full)
  }
  if (theme === 'accent1') {
    classNames.push(styles.Button_accent1)
  } else if (theme === 'accent2') {
    classNames.push(styles.Button_accent2)
  } else if (theme === 'error') {
    classNames.push(styles.Button_error)
  } else if (theme === 'success') {
    classNames.push(styles.Button_success)
  }

  return (
    <button
      disabled={disabled}
      className={classNames.join(' ')}
      onClick={onClick}>{text}</button>
  )
}

export default Button
