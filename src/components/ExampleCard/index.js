import React from 'react'

import './ExampleCard.css'

const ExampleCard = ({ header, body, children }) => (
  <div className='example-card'>
    <div className='example-info'>
      <p className='example-header'>{header}</p>
      <p className='example-detail'>{body}</p>
    </div>
    <div className='example-item'>
      {children}
    </div>
  </div>
)

export default ExampleCard
