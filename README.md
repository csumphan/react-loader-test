react-loader-test
===========


A reusable React loader/spinner component

## Introduction
For the take-home coding assignment, I chose to create a loader. In my implementation, I created two types of loader, a spinner loader and a bar loader. I included a couple customization for the loader component, such as changing the size, the color, etc. for the loader. Additionally, the loader can wrap a component to hide that component until `false` is passed to the `loading` prop. For the bar loader, you can also customize it to be a progress bar. By passing a variant prop and a percent prop, the bar loader will display progress according to the percent.

Cloning and running this repo will display a couple example usages of the loader component on `localhost:8080`

The next few sections of the introduction will go over what and how I implemented each part of the assignment. For example, babel/webpack setup and testing setup.

### React Project Setup

I decided to create the React project from scratch, since many of the boilerplates I found had too many extra dependencies I didn't need.

#### yarn
To start off, I ran `yarn init` within my project directory, which creates a `package.json`, which keeps all the dependencies I need consistent.

#### Babel
To transpile es6 and es7 syntax to something web browsers can understand, I used Babel. Using `yarn` I installed a couple Babel modules such as `babel-cli` and `babel-core`. Additionally, I added some babel presets like `babel-preset-env` which allows me to run es6, es7, and es8 code and `babel-preset-react` to run jsx and react code.

To configure my babel setting, I created a `.babelrc` file and included the presets and plugins I want for my app.

#### Webpack

Webpack is needed to bundle my react files, css files, and other modules to a single file that an html file can use. I start by installing webpack through yarn and creating a config file, `webpack.config.js`. 

Some important things I add to my webpack config were loaders. The loaders help process files that are not vanilla javascript, such as the es6/es7 files and css files.

I also added `html-webpack-plugin` to put the built javascript into the `index.html` file in the public folder. I also used another plugin called `clean-webpack-plugin`, to clean out the build folder before every build.

I also added webpack's dev server and configured it in the config file to run on `localhost:8080`

Also, I wrote another webpack config file for a production build, `webpack.config.prod.js`, and added a script in the `package.json` to build the app.

#### File Structure
<img width="289" alt="screenshot 2018-09-08 15 05 47" src="https://user-images.githubusercontent.com/19628690/45259048-b5106c80-b378-11e8-9476-b1164dcb7a34.png">

All the react code is within the src folder. I placed all reusable components within the components folder. The container folder contains components that house other reusable components and provide logic to the reusable components. All of the testing code can be found within the test folder.

#### Testing
To test the components I used Jest as my testing framework and used Enzyme, a utility library for react, to help test the components. I configured Jest to run a Babel loader on the test files, so I could use es6 syntax and jsx. The configuration was done in the `jest.config.js` file. To setup Enzyme before each Jest test, I have a setup file for enzyme, `enzyme.setup.js` and included the file in the Jest config file.

## Screenshot

![loader](https://user-images.githubusercontent.com/19628690/45267765-e431e700-b427-11e8-8efd-804c0a646372.gif)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![progressbar](https://user-images.githubusercontent.com/19628690/45267766-e431e700-b427-11e8-8987-7ee0cea9bfca.gif)

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

## How to Run Test

**Step 1:** Complete repo setup/installation


**Step 2:** Run the testing suite using `yarn test`

## How to Create Production Build

**Step 1:** Complete repo setup/installation


**Step 2:** Run the webpack build using `yarn build`

You can find the build in dist/ in the project's root directory

## Usage

`Loader` is a React component that consists of two types of loader, `Circle` and `Bar`.  You can change the button's loading state using the `loading` prop.

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
`yarn test`    | Start testing suite
`yarn build`    | Create production build


