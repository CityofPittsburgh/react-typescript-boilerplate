# React/Redux/Typescript Boilerplate

This repository contains a boilerplate application that has served as the starting point for many of the client apps in production at the City of Pittsburgh.  Note that if you were directed here by a README in one of these, it is likely not entirely in step with this boilerplate.  Software being amorphous, the boilerplate used to spin up [ACC Mobile](https://github.com/CityofPittsburgh/ACCmobile) two years ago was of course different than that used to spin up [Confiscated Guns](https://github.com/CityofPittsburgh/confiscated-guns) last week.  

However, I (Paul Marks) have done my best to keep all production apps in step with changes to the boilerplate, as the boilerplate has served as the most up-to-date iteration of this type of application.  In older applications, libraries may need updated, markup may need replaced with [react-bootstrap](https://react-bootstrap.github.io/), and [classes may need replaced with hooks](https://reactjs.org/docs/hooks-faq.html)...but beyond that, the overall structure and design should be identical.

## Design
Frameworks and languages aside, there were two primary design choices that went into this boilerplate: 
1. A config-free build.  Because I hate Webpack, and Webpack hates me.
2. An authentication service that can authenticate City of Pittsburgh employees through an open, web-based protocol.

The product?  
* A [CRA](https://github.com/facebook/create-react-app) served up from 
* [node](https://nodejs.org/en/) with a 
* [passport](http://www.passportjs.org/) config via 
* [Outlook](http://www.passportjs.org/packages/passport-outlook/), the City's email service provider.  
* Plus [redux](https://redux.js.org/), because state management is sick,  
* and [typescript](https://www.typescriptlang.org/), because type safety and polymorphism are also sick.
* And let's not forget [prettier](https://prettier.io/) for formatting,
* and [bootstrap](https://getbootstrap.com/) for the UI: v4 in the newer apps, v3 in the older ones.

## Structure    
    ├── app                             # Client application
        ├── build                       # Minified build, served to client in prod
        ├── public                      # Public dir
        ├── src                         # Source code, client app         
            ├── components              # All react components          
                |── demoForm            # Demo form...plug-n-play data entry         
                |── formElements        # Standardized, type-safe form elements with headers
                  |── cleave.tsx        # Cleave.js wrapper
                  |── input.tsx         # Input wrapper
                  |── required.tsx      # Little red asterisks when required==true
                  |── select.tsx        # React-select wrapper 
                  |── textarea.tsx      # Expandable textarea      
                |── home                # Landing page
                |── nav                 # Navigation elements    
                |── utilities           # Util components
                  |── hydrateStore.tsx  # Component hydrates entire store 
                  |── messages.tsx      # Message/alert component
                  |── paging.tsx        # Paging for arrays of objects
                  |── spinner.tsx       # Spinner when stuff is loading
            ├── css                     # All vanilla css
            ├── functions               # Global functions
            ├── images                  # ...you guessed it
            ├── store                   # Redux store
                |── constants           # Global const definitions         
                |── types               # Global type definitions   
                index.ts                # Store config
                messages.ts             # Message store -- error, success, etc.       
                user.ts                 # User store -- persists user info
    ├── auth                            # Static assets used in authentication workflow
    server.js                           # node server and entry point in production


## Authentication & Access
Authentication is handled by [passport](http://www.passportjs.org/) via the Outlook OAuth service.  Access is provided if the email address returned from Outlook ends with "@pittsburghpa.gov."  In some applications, further access control is implemented by querying users groups in Sharepoint, and checking the returned user against the group.

When users hit the node server, a wildcard catches all traffic and checks if the user is authenticated.  If not, then they're passed through the auth workflow and returned to the wildcard route.  The wildcard route serves up the minified build.  All further routing occurs within the client app.

```javascript
// catches all traffic
// checks for authentication
// returns build
app.get('*', ensureAuthenticated, (req, res) => {
  const link = (req.path == '/' ? 'index.html' : req.path)
  const root = path.join(__dirname, 'app/build')
  res.sendFile(link, {
    root: root
  }, (error) => {
    if (error) {
      res.sendFile('/', {
        root: root
      })
    }
  })
})
```

The user profile is maintained on the server, and called up from the client to populate the user store.  The /getUser endpoint is the only real endpoint on the server:

```javascript
// returns user profile
app.use('/getUser', function (req, res) {
  res.status(200).send({
    'email': req.user.emails[0].value,
    'organization': "City of Pittsburgh",
    'name': req.user.displayName
  })
})
```

## Classes vs. Hooks
With version 16.8, React introduced the [hooks API](https://reactjs.org/docs/hooks-intro.html).  Hooks permit pure functions to access the lifecycle methods, whereas in previous versions lifecycle methods were only exposed to class components.  Additionally, with closures, hooks facilitate the peristence of state between components without reliance on a  third party library, such as [Redux](https://redux.js.org/). 

This boilerplate has been rewritten to favor hooks over class-based components, and a handful of more recent projects have implemented a hooks-first design.  It's much less verbose, and quicker to write.  The tradeoff: it's much less explicit.  If you're referencing this boilerplate in working with a production application that is chocked full of classes, you'll want to spend some time with the [docs](https://reactjs.org/docs/hooks-reference.html#basic-hooks) to get a fix on the mapping between lifecycle management in classes vs. functions.

## Running Locally

### Prerequisites

* [Node.js](https://nodejs.org) - JS runtime
* [Outlook Client ID & Secret](https://docs.microsoft.com/en-us/graph/auth-register-app-v2) - App registration with Microsoft for auth

### Installation
```
git clone https://github.com/CityofPittsburgh/react-typescript-boilerplate
cd react-typescript-boilerplate
```

### Development
There are two different ways to run this application.   The first is the "development" mode and involves booting up from the app directory.  In this mode, authentication is bypassed, and the application is started on port 3000 with [hot module reloading](https://webpack.js.org/concepts/hot-module-replacement/).  From the root directory:
```
cd app
// install dependencies for the client
npm install
// start the app
npm start
// like what you've done?
// run the build
npm run build
```

### Production
The second mode -- "production" mode -- involves booting up the node server, which passes you through the auth flow, and then delivers the minified build from app/build.  From the root directory:
```
// install dependencies for the server
npm install
// start node
node server.js
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details