# Auth App Exercise
## Part III - UI Routing

## Summary
Application with simple token based authentication.

Application provides API for authenticating the user based on credentials (username and password). 
We want to authenticate existing user or create new and provide them with access to resources available
only to registered users. Moreover, it should extensively make use of `$stateProvider` abstract views
for authentication.

## Goal

Your goal is to implement `$stateProvider` views for auth application. We provided you with simple
html templates as well as overall design helping you to understand nesting and dependencies. The design is
as follows:

  - view.html       - template for this specific view(mostly required)
  - view.js         - declaration of the specific state
  - view-ctrl.js    - controller for this specific state(not required in many cases)
  
Using the data available in the templates you need to ensure that everything is accessible in a simple
matter. When you see it fit, you can also add growl component to increase user experience. Be aware that you are not 
allowed to modify templates! Below you will find complete list of views you are about to implement:

```
    site, auth, login, register, menu, home, about
```

`Site` will be your main template, providing you with `no-auth` overlay if user is not authenticated.
On the other hand, `auth` view should be properly nested and ensure that only authenticated user is able
to enter specific state, depending on the services from the previous exercise.

The `login` state and home state are bound to be a little tricky - they both should be available at the
root of the application, but never at the same time(if user is logged in he should be properly redirected
to `home` state, otherwise he should see `no-auth` overlay with login state). When it comes to `register`
state, you will find the required url in the `login` template. You should be able to enter register only 
if you are unauthenticated, otherwise it should redirect you to root of the application. 

`Home` state is the main application view. It should include `menu` view on the top that will allow
simple navigation to the user, as well as required information(user name). The `about` view should be 
available under `'/about'` path and be relative to `home` state.

Using the correct syntax bind `AuthService` login function to allow users to log in and register function
to register(place them accordingly to the state name). Additionally, make sure that user cannot submit empty form
(or empty field) and ensure that every view for authenticated users is provided with `User` information, but you 
are not allowed to create any service. `Menu` and `Home` controller should be instantiated with user data and 
displayed in proper places.


## API

**Get current user**

`GET /user/current`

**Register new user**

`POST /user/register`

**Authenticate user**

`POST /auth/login`

**Unauthenticate user**

`POST /auth/logout`

## Setup

To get all the scripts required from the previous task type:

```
  git checkout <previous branch> -- app
```

You should have installed `npm, bower, grunt and grunt-cli` packages to run this example.
First, run sequentially:

```
  npm install
```
```
  bower install
```

To run the application, type:

```
  grunt serve
```

It will run application in your default system browser.

