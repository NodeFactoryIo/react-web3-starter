![NodeFactory](banner.png)  

# React Web3 Starter  

Starter repository for developing React front-end apps.  
Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with addition of own flavor's to reduce initial boilerplate and solve common problems.  

## Requirements  

Following software is required to be installed to use this repo:  
 * [NodeJs](https://nodejs.org/en/) >= v12  
 * [Yarn](https://yarnpkg.com/en/docs/install#debian-stable)  

## Usage  

- `yarn install` - will run and configure everything for you  

#### Development  

 - `yarn start` - runs the app in the development mode @ [http://localhost:3000](http://localhost:3000)
 - `yarn storybook` - runs component documentation in the development mode @ [http://localhost:6006/](http://localhost:6006/)

#### Tools  

 - `yarn lint` - analyze code and report problems  
 - `yarn lint:types` - check type errors  
 - `yarn lint:fix` - fix code problems, if unable will report them  
 - `yarn i18n` - extract translations from code  
 - `yarn test` - run unit tests  
 - `yarn eject` - unpack `react-scripts` in to the project [more information](https://create-react-app.dev/docs/available-scripts/)  
   - **Note: this is a one-way operation.**  

#### Production  

 - `yarn build` - builds the app for production to the `build` folder [more information](https://facebook.github.io/create-react-app/docs/deployment)
 - `yarn build-storybook` - builds documentation can be served over static web server  
