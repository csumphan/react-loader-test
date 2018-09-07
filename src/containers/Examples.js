import React from 'react'
import { Circle, Bar } from '../components/Loader'
import ExampleCard from '../components/ExampleCard'


class Examples extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  mockAPICall = () => {
    this.setState({
      loading: true
    })

    //This timeout demonstrate a wait for a server response
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1200);
  }

  render() {
    return (
      <div className='example-container'>
        <ExampleCard header='Default'>
          <Bar />
          <Circle />
        </ExampleCard>
        <ExampleCard header='Change Color'>
          <Bar color='red' />
          <Circle color='#34a32a' />
        </ExampleCard>
        <ExampleCard
          header='Overlay Loader'
          body='By passing some children and setting loading to true, the Loading components will act as an overlay.'
          >
          <Bar loading color='red'>
            <div>asdfads</div>
          </Bar>
          <Circle loading>
            <div>asdfads</div>
          </Circle>
        </ExampleCard>
        <ExampleCard
          header='Overlay Loader (Async Call)'
          body='Press the button to simulate an async call. The loader will appear until the call is done.'
          >
          <Circle loading={this.state.loading}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#2ea233'
              }}
              >
              Data from server
            </div>
          </Circle>
          <button onClick={this.mockAPICall} disabled={this.state.loading}>Mock Call to API</button>
        </ExampleCard>
        <ExampleCard
          header='Change Size'
          >
          <Bar height='50px' width='500px'/>
          <Circle size='160px'/>
        </ExampleCard>
        <ExampleCard
          header='Progress Bar (Bar only)'
          body="By setting variant to 'progress' and passing a number between (0-100) to the percent prop, the loader can act as a progress bar. This variant will only work with the Bar component, not Circle."
          >
          <Bar variant='progress' percent='73'/>
        </ExampleCard>
      </div>
    )
  }
}


export default Examples
