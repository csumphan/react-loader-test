react-loader-test
===========


A reusable React loader/spinner component

## Introduction
For the take-home coding assignment, I chose to create a loader. In my implementation, I created two types of loader, a spinner loader and a bar loader. I included a couple customization for the loader component, such as changing the size, the color, etc. for the loader. Additionally, the loader can wrap a component to hide that component until `false` is passed to the `loading` prop. The next few sections of the introduction will go over what and how I implemented each part of the assignment. For example, babel/webpack setup and testing setup.

Cloning and running this repo will display a couple example usage of the loader component on `localhost:8080`

### React Project Setup (File Structure, Babel, Webpack, yarn)

### yarn
To start off, I ran `yarn init` within my project directory, which creates a `package.json`, which keeps all the dependencies I need consistent.

### Babel
To transpile es6 and es7 syntax to something web browsers can understand, I used Babel. Using `yarn` I installed a couple Babel modules such as `babel-cli` and `babel-core`. Additionally, I added some babel presets like `babel-preset-env` which allows me to run es6, es7, and es8 code and `babel-preset-react` to run jsx and react code.

To configure my babel setting, I created a `.babelrc` file and included the presets and plugins I want for my app.

### Webpack

Webpack is needed to bundle my react files, css files, and other modules to a single file that an html file can use. I start by installing webpack through yarn and creating a config file, `webpack.config.js`. 

Some important things I add to my webpack config were loaders. The loaders help process files that are not vanilla javascript, such as the es6/es7 files and css files.

I also added `html-webpack-plugin` to put to built javascript into the `index.html` file in the public folder.

I also added webpack's dev server and had it run on port 8080

## Screenshot

![loader-example](https://user-images.githubusercontent.com/19628690/45247869-d19c9e00-b2bf-11e8-9497-f189c98e7b79.gif)

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

After cloning and running `yarn`, you can use the following `yarn` commands:

Command         | Description
--------------- | -----------
`yarn start`    | Start application

