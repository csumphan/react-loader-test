import React from 'react'
import { Circle, Bar } from '../components/Loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Circle/>
        <Bar variant='progress' percent={23} color='red'/>
        <Bar percent={23} color='red'/>
      </div>
    )
  }
}

export default App
