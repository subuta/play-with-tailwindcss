import React from 'react'
import _ from 'lodash'

import { CSSTransition } from 'react-transition-group'

import { FiX } from 'react-icons/fi'

import styles from './index.pcss'

export default (props) => {
  const {
    children,
    onHide = _.noop,
    open = false
  } = props

  const modalClass = styles.modal

  return (
    <CSSTransition
      in={open}
      classNames='modal-fade-in'
      timeout={300}
      unmountOnExit
    >
      <div className={styles.modalWrapper}>
        <div
          onClick={onHide}
          className={styles.backdrop}
        />

        <div className={modalClass}>
          <FiX
            className='m-2 absolute right-0 top-0 text-2xl cursor-pointer'
            onClick={onHide}
          />

          {children}
        </div>
      </div>
    </CSSTransition>
  )
}
