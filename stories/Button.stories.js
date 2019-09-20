import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'src/components/Button'

storiesOf('Button', module)
  .add('normal', () => (
    <Button>Hello Button</Button>
  ))
  .add('ghost', () => (
    <Button ghost>Hello Button</Button>
  ))
