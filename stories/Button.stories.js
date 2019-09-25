import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'src/components/Button'

storiesOf('Button', module)
  .add('normal', () => (
    <Button onClick={() => console.log('clicked!')}>Hello Button</Button>
  ))
  .add('ghost', () => (
    <Button onClick={() => console.log('clicked!')} ghost>Hello Button</Button>
  ))
