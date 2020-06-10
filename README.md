# test-single-spa

Trying Single SPA Framework

# action log

## installing cli

https://single-spa.js.org/docs/create-single-spa

yarn global add create-single-spa

## creating root config

create-single-spa

- Directory for new project test-single-spa
- Select type to generate single-spa root config
- Which package manager do you want to use? yarn
- Will this project use Typescript? No
- Organization name (use lowercase and dashes) extrascript

## creating application

create-single-spa

- Directory for new project test-single-spa-auth
- Select type to generate single-spa application / parcel
- Which framework do you want to use? react
- Which package manager do you want to use? yarn
- Will this project use Typescript? No
- Organization name (use lowercase and dashes) extrascript
- Project name (use lowercase and dashes) auth

Project setup complete!

Steps to test your React single-spa application:

1. Run 'yarn start --port 8500'
2. Go to http://single-spa-playground.org/playground/instant-test?name=@org/spa&url=8500 to see it working!

## doesn't work

issues in console: 1 is fixed:
https://stackoverflow.com/questions/45366744/refused-to-load-the-font-datafont-woff-it-violates-the-following-content

##

1. Run 'yarn start --port 8500
2. Go to http://single-spa-playground.org
3. Run the following in the browser console: window.importMapOverrides.addOverride('@extrascript/components', '8500')
4. Run the following in the browser console: System.import('@extrascript/components')

## importmap

https://storage.googleapis.com/react.microfrontends.app/importmap.json

## solved issue with rendering/

domElement or domElementGetter
https://single-spa.js.org/docs/ecosystem-react/

## issue with hooks

Issue was due to multiple react loaded
2nd react has been loaded from antd / components
Added webpack rule to exclude react, react-dom and antd: https://webpack.js.org/configuration/externals/
!!! There is an issue with react-dom - returned back
react and antd are ok, antd required to include moment.js
Changes are in root-config
antd guideline: https://ant.design/docs/react/introduce#Import-in-Browser

TODO: fix issues with react-dom - fixed:

`externals: { 'react': 'react', 'react-dom': 'react-dom', 'antd': 'antd' }`

## May 27

antd moved back to @extrascript/components
Created calendar application
Added Login form on Home
Fixed header styling: added logo styles, menu, search bar, user dropdown
Moved footer to bottom

TODO: antd/icons
TODO: fix error preventing commit navigation
