import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Circle } from '../src/components/Loader';

describe('Circle Component', function() {
  it('should be defined', () => {
    const wrapper = shallow(<Circle />);

    expect(wrapper).toBeDefined();
  });

  it('should render', () => {
    const wrapper = shallow(<Circle />);

    expect(wrapper.containsMatchingElement(
      <div className="spinner"></div>
    )).toBe(true);
  });


  it('should be loading as default', () => {
    const wrapper = shallow(
      <Circle>
        <div>Blah</div>
      </Circle>
    )

    //checks if the overlay has the right css classes when loading is true
    expect(wrapper.find('.bar-container').hasClass('loader-hide')).toBe(false)
    expect(wrapper.find('.overlay').hasClass('overlay-show')).toBe(true)
  });

  it('should be not show loading if loading prop is false', () => {
    const wrapper = shallow(
      <Circle loading={false}>
        <div>Blah</div>
      </Circle>
    )

    //checks if the overlay has the right css classes when loading is false
    expect(wrapper.find('.bar-container').hasClass('loader-hide')).toBe(true)
    expect(wrapper.find('.overlay').hasClass('overlay-show')).toBe(false)
  });

  it('should render label given label prop', () => {
    const wrapper = shallow(<Circle label='Hello World'/>);

    expect(wrapper.containsMatchingElement(
      <p>Hello World</p>
    )).toBe(true);
  });

  it('should change size given a size prop', () => {
    const size = '25px'
    const wrapper = shallow(<Circle size={size}/>)
    const loaderElement = wrapper.find('.spinner')

    //check if the loading container change its size
    expect(loaderElement.get(0).props.style).toHaveProperty('height', size)
    expect(loaderElement.get(0).props.style).toHaveProperty('width', size)
  });

  it('should change color given a color prop', () => {
    const color = '#aaaaaa'
    const wrapper = shallow(<Circle color={color}/>)
    const loaderElement = wrapper.find('.spinner')

    expect(loaderElement.get(0).props.style).toHaveProperty('borderTopColor', color)
  });

  it('should change container style given a containerStyle prop', () => {
    const style = {
      backgroundColor: '#aaa',
      height: '100px'
    }
    const wrapper = shallow(<Circle containerStyle={style}/>)
    const loaderElement = wrapper.find('.label-bar-container')

    //checks if the container component has the styles given
    expect(loaderElement.get(0).props.style).toHaveProperty('height', style.height)
    expect(loaderElement.get(0).props.style).toHaveProperty('backgroundColor', style.backgroundColor)
  });

  it('should change bar style given a barStyle prop', () => {
    const style = {
      backgroundColor: '#aaa',
      height: '100px'
    }
    const wrapper = shallow(<Circle barStyle={style}/>)
    const loaderElement = wrapper.find('.spinner')

    //checks if the spinner component has the styles given
    expect(loaderElement.get(0).props.style).toHaveProperty('height', style.height)
    expect(loaderElement.get(0).props.style).toHaveProperty('backgroundColor', style.backgroundColor)
  });

  it('should display as an overlay given a children component', () => {
    const wrapper = shallow(
      <Circle>
        <div id='some-child-123'>hello world</div>
      </Circle>
    )

    //check if the children component exist within Circle component
    expect(wrapper.containsMatchingElement(
      <div id='some-child-123'>hello world</div>
    )).toBe(true);

    //check if the loading overlay is showing
    expect(wrapper.find('.overlay-show')).toBeDefined()
  });

});
