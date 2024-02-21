import React, { useState } from 'react'
import './App.css'
import Input_Value from './components/Input_Value'
import { Button } from '@mui/material'

const App = () => {

  
  return (
    <>
      <div className='flex justify-center my-10'>
        <Input_Value placeholder='Enter Message' type='text' className='w-1/2 px-5 border-2 border-black'  />
       
      </ div>
    </>
  )
}

export default App