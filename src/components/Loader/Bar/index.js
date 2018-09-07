import React from 'react'
import PropTypes from 'prop-types'

import './Bar.css'

const Bar = ({ children, variant, loading, percent, color, label }) => {

  return (
    <div>
      <div className='loading-bar'>
        <div className='progress'></div>
      </div>
      { children }
    </div>
  )
}

Bar.propTypes = {
  variant: PropTypes.oneOf(['infinite', 'progress']),
  loading: PropTypes.bool,
  percent: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
}
export default Bar
