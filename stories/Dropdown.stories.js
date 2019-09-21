import React from 'react'

import { storiesOf } from '@storybook/react'

import Dropdown from 'src/components/Dropdown'
import { Value } from 'react-powerplug'

storiesOf('Dropdown', module)
  .add('normal', () => (
    <>
      <Dropdown
        choices={[
          'hoge',
          'fuga',
          'piyo'
        ]}
        onSelect={(choice) => console.log(choice)}
      >
        click me!
      </Dropdown>

      <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consectetur
        corporis est exercitationem iure laborum, libero maiores maxime nisi perferendis quae quisquam rem reprehenderit
        rerum sint totam unde voluptatibus.
      </p>
    </>
  ))
  .add('selection', () => (
    <Value initial='select me!'>
      {({ value, set }) => (
        <>
          <Dropdown
            choices={[
              'hoge',
              'fuga',
              'piyo'
            ]}
            onSelect={set}
          >
            {value}
          </Dropdown>

          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consectetur
            corporis est exercitationem iure laborum, libero maiores maxime nisi perferendis quae quisquam rem
            reprehenderit rerum sint totam unde voluptatibus.
          </p>
        </>
      )}
    </Value>
  ))
