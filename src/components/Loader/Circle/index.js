import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../index.css'
import './Circle.css'

const Circle = ({
  children,
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
    <div className='label-bar-container'>
      <div className='spinner' style={barSty}></div>
      <p>{label}</p>
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
  loading: PropTypes.bool,
  percent: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  barStyle: PropTypes.object
}

Circle.defaultProps = {
  loading: true
}

export default Circle
