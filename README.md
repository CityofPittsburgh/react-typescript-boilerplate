# React/Redux/Typescript Boilerplate

This repository contains a boilerplate application that has served as the starting point for many of the client apps in production at the City of Pittsburgh.  Note that if you were directed here by a README file in one of these production applications, it is likely not entirely in step with this boilerplate.  Software being such a delightfully amorphous phenomenon, the boilerplate used to spin up [ACC Mobile](https://github.com/CityofPittsburgh/ACCmobile) two years ago was of course different than that used to spin up [Confiscated Guns](https://github.com/CityofPittsburgh/confiscated-guns) last week.  

However, I (Paul Marks) have done my best to keep all production apps in step with changes to the boilerplate, as the boilerplate has served as the most up-to-date iteration of this type of application.  In older applications, libraries may need updated, markup may need replaced with [react-bootstrap](https://react-bootstrap.github.io/), and [classes may need replaced with hooks](https://reactjs.org/docs/hooks-faq.html)...but beyond that, the overall structure and design should be identical.

## Design
Frameworks and languages aside, there were two primary design choices that went into this boilerplate: 
1. A config-free build.  Because I hate Webpack, and Webpack hates me.
2. An auth module that can authenticate any City of Pittsburgh employee through an open, web-based protocol.

The product?  A [CRA](https://github.com/facebook/create-react-app) served up from [node](https://nodejs.org/en/) with a [passport](http://www.passportjs.org/) config via [Outlook](http://www.passportjs.org/packages/passport-outlook/), the City's email service provider.  Plus [redux](https://redux.js.org/), because state management is sick.  Plus [typescript](https://www.typescriptlang.org/), because type safety and polymorphism are also sick.

## Structure    
    ├── app                         # Client application
        ├── build                   # Minified build, served to client in prod
        ├── public                  # Public dir
        ├── src                     # Source code, client app         
            ├── components          # All react components          
                |── demoForm        # Demo form...plug-n-play data entry         
                |── formElements    # Standardized, type-safe form elements          
                |── home            # Landing page
                |── nav             # Navigation elements    
                |── utilities       # Util components          
            ├── css                 # All vanilla css
            ├── functions           # Global functions
            ├── images              # ...you guessed it
            ├── store               # Redux store
                |── constants       # Global const definitions         
                |── types           # Global type definitions   
                index.ts            # Store config
                messages.ts         # Message store -- error, success, etc.       
                user.ts             # User store -- persists user info
    ├── auth                        # Static assets used in authentication workflow
    server.js                       # node server and entry point in production

## Running Locally

### Prerequisites

* [Node.js](https://nodejs.org) - JS runtime
* .env - See .env.example for all required secrets

### Installation
```
git clone https://github.com/CityofPittsburgh/react-typescript-boilerplate
cd react-typescript-boilerplate
// first, install dependencies for the server
npm install
// then, install dependencies for the client
cd app
npm install
// to run the app locally and bypass auth
npm start
// to bundle the app for deployment
npm run build
// to run the app from the minified build, with auth workflow
cd ..
node server.js
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details