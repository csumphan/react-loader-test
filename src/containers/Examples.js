import React from 'react'
import { Circle, Bar } from '../components/Loader'


const Examples = () => (
  <div className='example-container'>
    <div className='example-card'>
      <div className='example-info'>
        <p className='example-header'>Default</p>
      </div>
      <div>
        <Bar />
        <Circle />
      </div>
    </div>
  </div>
)

export default Examples
