import React from 'react'
import _ from 'lodash'

import styles from './index.pcss'

export default (props) => {
  const {
    children,
    onClick = _.noop,
    ghost = false
  } = props

  let buttonClass = styles.filledButton
  if (ghost) {
    buttonClass = styles.ghostButton
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}
