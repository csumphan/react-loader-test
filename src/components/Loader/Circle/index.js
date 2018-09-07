import React from 'react'
import PropTypes from 'prop-types'

import './Circle.css'

const Circle = ({ children }) => {
  return (
    <div>
      <div className='spinner'></div>
      { children }
    </div>
  )
}

Circle.propTypes = {
  variant: PropTypes.oneOf(['bar', 'circle']),
  loading: PropTypes.bool,
  percent: PropTypes.number,
  infinite: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
}
export default Circle
