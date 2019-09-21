import React from 'react'

import Button from './components/Button'

export default () => {
  return (
    <div className='h-screen w-screen p-4 flex flex-col items-center justify-center'>
      <h1 className='text-6xl text-red-500'>Hello world</h1>

      <Button onClick={() => window.alert('clicked!')}>click me!</Button>
    </div>
  )
}
