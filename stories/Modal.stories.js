import React from 'react'

import { storiesOf } from '@storybook/react'

import Modal from 'src/components/Modal'
import Button from 'src/components/Button'

import { Toggle } from 'react-powerplug'

storiesOf('Modal', module)
  .add('normal', () => (
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <>
          <Button onClick={toggle} ghost>open</Button>
          <Modal
            open={on}
            onHide={toggle}
          >
            <div className='p-4 bg-white rounded h-64 w-64 text-center'>
              <h1 className='text-2xl'>Hello world!</h1>
            </div>
          </Modal>
        </>
      )}
    </Toggle>
  ))
  .add('normal - open', () => (
    <Toggle initial>
      {({ on, toggle }) => (
        <>
          <Button onClick={toggle} ghost>open</Button>
          <Modal
            open={on}
            onHide={toggle}
          >
            <div className='p-4 bg-white rounded h-64 w-64 text-center'>
              <h1 className='text-2xl'>Hello world!</h1>
            </div>
          </Modal>
        </>
      )}
    </Toggle>
  ))
