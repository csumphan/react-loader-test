react-loader-test
===========


A reusable React loader/spinner component

## How to Setup/Installation
**Step 1:** git clone this repo:

```bash
git clone https://github.com/csumphan/react-loader-test.git
```

**Step 2:** cd to the cloned repo:

```bash
cd react-loader-test
```

**Step 3:** Install the Application with `yarn`


**Step 4:** Run the Application using `yarn start`

## Usage

`Loader` is a React component that consists of two types of loader, `Circle` and `Bar`.  You can change the button's loading state and progress using the `loading`.

```jsx
import React from 'react'
import { Circle, Bar } from '../components/Loader'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  
  mockAPICall = () => {
    this.setState({
      overlayLoading: true
    })

    //This timeout demonstrate a wait for a server response
    setTimeout(() => {
      this.setState({
        overlayLoading: false
      })
    }, 1200);
  }

  render() {
    return (
      <div>
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
        <button onClick={this.mockAPICall} disabled={this.state.overlayLoading}>Mock Call to API</button>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.body);
```

## Props

### Bar Component Props
Prop                 | Type      | Description    | 
-------------------- | --------- | -------------- | 
`loading`            | `boolean` | Show the loader component if true                       
`variant`            | `['infinite', 'progress']` | A string representing the type of loader
`percent`           | `number`  | Number from 0 to 100                                        
`height`          | `string`  | A string to represent the height of loader (ex. `100px`, `.03vh`)
`width`          | `string`  | A string to represent the width of loader (ex. `100px`, `.03vh`)  
`containerStyle`         | `object`  | An object to override the style of the loader's container
`barStyle`  | `object`  | An object to override the style of the loader's moving component
`color` | `string`  | Color applied to the loader (ex. `#eee`, `red`)
`label` | `string`  | String message to show underneath loader

### Circle Component Props
Prop                 | Type      | Description    | 
-------------------- | --------- | -------------- | 
`loading`            | `boolean` | Show the loader component if true                       
`percent`           | `number`  | Number from 0 to 100                                        
`size`          | `string`  | A string to represent the size of loader (ex. `100px`, `.03vh`) 
`containerStyle`         | `object`  | An object to override the style of the loader's container
`barStyle`  | `object`  | An object to override the style of the loader's moving component
`color` | `string`  | Color applied to the loader (ex. `#eee`, `red`)
`label` | `string`  | String message to show underneath loader

## Development

After cloning and running `npm install`, you can use the following `npm` commands for easier development:

Command         | Description
--------------- | -----------
`yarn start`    | Start application


_Contributions are more than welcome!_
