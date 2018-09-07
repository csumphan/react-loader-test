import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Bar.css'

const Bar = ({
  children,
  variant,
  loading,
  percent,
  color,
  label,
  height,
  width,
  barStyle,
  containerStyle
}) => {
  const barSty = {
    backgroundColor: color,
    ...barStyle
  }

  const containerSty = {
    height,
    width,
    ...containerStyle
  }

  const barLoader = (
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
  )
  //checks if the Bar component has any children, if not just return the loader component on its own
  if (!children) {
    return barLoader
  }

  //if there is any children component, the barLoader will render over the children as an overlay until loading is false
  return (
    <div className='loading-container'>
      <div
        className={classNames('overlay', { 'overlay-show': loading })}
        >
      </div>
      <div className='bar-container'>
        { barLoader }
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
