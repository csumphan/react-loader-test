import React from 'react'
import PropTypes from 'prop-types'

import './Bar.css'

const Bar = ({ children, variant, loading, percent, color, label, height, width, barStyle, containerStyle }) => {
  const barSty = {
    backgroundColor: color,
    ...barStyle
  }

  const containerSty = {
    height,
    width,
    ...containerStyle
  }

  return (
    <div>
      <div className='loading-bar' style={containerSty}>
        {
          variant === 'infinite' &&
          <div className='moving-bar' style={barSty}></div>
        }
        {
          variant === 'progress' &&
          <div
            className='progress-bar'
            style={{
              width: `${percent}%`,
              ...barSty,
            }}>
          </div>
        }
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
  height: PropTypes.string,
  width: PropTypes.string,
  containerStyle: PropTypes.object,
  barStyle: PropTypes.object
}

Bar.defaultProps = {
  variant: 'infinite',
  color: '#3498db',
  width: '300px',
  height: '15px',
}
export default Bar
