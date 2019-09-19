import React from 'react'

import styles from './index.css'

export default ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    h1
    {children}
  </button>
)
