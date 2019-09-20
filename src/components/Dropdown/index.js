import React from 'react'
import _ from 'lodash'

import { Toggle } from 'react-powerplug'
import { FiChevronDown } from 'react-icons/fi'

import styles from './index.pcss'

export default (props) => {
  const {
    onSelect = _.noop,
    choices = [],
    children,
  } = props

  let dropdownClass = styles.dropdown

  return (
    <Toggle initial={false}>
      {({ on, toggle }) => {
        return (
          <div className={dropdownClass}>
            {on && (
              <div
                onClick={toggle}
                className={styles.backdrop}
              />
            )}

            <button onClick={toggle}>
              <span>{children}</span>
              <FiChevronDown />
            </button>

            {on && (
              <ul>
                {_.map(choices, (choice) => (
                  <li
                    key={choice}
                    onClick={() => {
                      onSelect(choice)
                      toggle()
                    }}
                  >
                    {choice}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      }}
    </Toggle>
  )
}
