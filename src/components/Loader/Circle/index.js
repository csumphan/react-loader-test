import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../index.css'
import './Circle.css'

const Circle = ({
  children,
  variant,
  loading,
  percent,
  color,
  label,
  size,
  barStyle,
  containerStyle
}) => {

  const barSty = {
    borderTopColor: color,
    height: size,
    width: size,
    ...barStyle
  }

  const circleLoader = (
    <div>
      {
        variant === 'infinite' &&
        <div className='spinner' style={barSty}></div>
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
  //checks if the Circle component has any children, if not just return the loader component on its own
  if (!children) {
    return circleLoader
  }

  //if there is any children component, the circleLoader will render over the children as an overlay until loading is false
  return (
    <div className='loading-container'>
      <div
        className={classNames('overlay', { 'overlay-show': loading })}
        >
      </div>
      <div className={classNames('bar-container', { 'loader-hide': !loading })}>
        { circleLoader }
      </div>
      { children }
    </div>
  )
}

Circle.propTypes = {
  variant: PropTypes.oneOf(['infinite', 'progress']),
  loading: PropTypes.bool,
  percent: PropTypes.number,
  infinite: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  barStyle: PropTypes.object
}

Circle.defaultProps = {
  variant: 'infinite',
}

export default Circle
