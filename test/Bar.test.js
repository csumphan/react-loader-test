import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Bar } from '../src/components/Loader';

describe('Bar Component', function() {
  it('should be defined', () => {
    const wrapper = shallow(<Bar />);

    expect(wrapper).toBeDefined();
  });

  it('should render', () => {
    const wrapper = shallow(<Bar />);

    expect(wrapper.containsMatchingElement(
      <div className="moving-bar"></div>
    )).toBe(true);
  });


  it('should be loading as default', () => {
    const wrapper = shallow(
      <Bar>
        <div>Blah</div>
      </Bar>
    )

    //checks if the overlay has the right css classes when loading is true
    expect(wrapper.find('.bar-container').hasClass('loader-hide')).toBe(false)
    expect(wrapper.find('.overlay').hasClass('overlay-show')).toBe(true)
  });

  it('should be not show loading if loading prop is false', () => {
    const wrapper = shallow(
      <Bar loading={false}>
        <div>Blah</div>
      </Bar>
    )

    //checks if the overlay has the right css classes when loading is false
    expect(wrapper.find('.bar-container').hasClass('loader-hide')).toBe(true)
    expect(wrapper.find('.overlay').hasClass('overlay-show')).toBe(false)
  });

  it('should render label given label prop', () => {
    const wrapper = shallow(<Bar label='Hello World'/>);

    expect(wrapper.containsMatchingElement(
      <p>Hello World</p>
    )).toBe(true);
  });

  it('should change size given a size prop', () => {
    const height = '25px'
    const width = '100px'

    const wrapper = shallow(<Bar height={height} width={width} />)
    const loaderElement = wrapper.find('.loading-bar')

    //check if the loading container change its size
    expect(loaderElement.get(0).props.style).toHaveProperty('height', height)
    expect(loaderElement.get(0).props.style).toHaveProperty('width', width)
  });

  it('should change color given a color prop', () => {
    const color = '#aaaaaa'
    const wrapper = shallow(<Bar color={color}/>)
    const loaderElement = wrapper.find('.moving-bar')

    expect(loaderElement.get(0).props.style).toHaveProperty('backgroundColor', color)
  });

  it('should change container style given a containerStyle prop', () => {
    const style = {
      color: '#aaa',
      height: '100px'
    }
    const wrapper = shallow(<Bar containerStyle={style}/>)
    const loaderElement = wrapper.find('.loading-bar')

    //checks if the container component has the styles given
    expect(loaderElement.get(0).props.style).toHaveProperty('height', style.height)
    expect(loaderElement.get(0).props.style).toHaveProperty('color', style.color)
  });

  it('should change bar style given a barStyle prop', () => {
    const style = {
      backgroundColor: '#aaa',
      height: '100px'
    }
    const wrapper = shallow(<Bar barStyle={style}/>)
    const loaderElement = wrapper.find('.moving-bar')

    //checks if the spinner component has the styles given
    expect(loaderElement.get(0).props.style).toHaveProperty('height', style.height)
    expect(loaderElement.get(0).props.style).toHaveProperty('backgroundColor', style.backgroundColor)
  });

  it('should display as an overlay given a children component', () => {
    const wrapper = shallow(
      <Bar>
        <div id='some-child-123'>hello world</div>
      </Bar>
    )

    //check if the children component exist within Circle component
    expect(wrapper.containsMatchingElement(
      <div id='some-child-123'>hello world</div>
    )).toBe(true);

    //check if the loading overlay is showing
    expect(wrapper.find('.overlay-show')).toBeDefined()
  });

  it('should change bar type given a variant prop', () => {
    const wrapper = shallow(<Bar variant='progress'/>)
    const loaderElement = wrapper.find('.progress-bar')

    expect(wrapper.find('.progress-bar')).toBeDefined()
  });

});
