import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'src/components/Button'

storiesOf('Button', module)
  .add('text', () => (
    <Button onClick={() => console.log('hoge!')}>Hello Button</Button>
  ))
