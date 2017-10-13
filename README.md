# Auth App Exercise
## Part II - Request interceptors

## Summary
Application with simple token based authentication.

Application provides API for authenticating the user based on credentials (username and password).
We want to authenticate existing user or create new and provide them with access to resources available
only to registered users.

## Goal

Your goal is to refactor services that you created in last exercise to make use of an interceptor. Instead using
fixed authorization token you should be able to receive token on authentication and automatically use it
in every request until logged out. In the setup section you will find a handy command that will let you to get your 
services from the previous exercise.

For starters, extend `AuthService` by `getToken()` function that will return the current token if it is set.
Be aware that your interceptor should use this method, and you are likely to deal with circular dependency. 
Place your `AuthInterceptor` in `auth-interceptor-factory.js`, and configure application properly in `app.js`.


## API

**Get current user**

`GET /user/current`

Returns current user object {name: <user name>}

**Register new user**

`POST /user/register`

Returns authentication token for new user {token <token>}

**Authenticate user**

`POST /auth/login`

Provided correct login and password, returns authentication token for user {token <token>}

**Unauthenticate user**

`POST /auth/logout`

No return value

## Setup


To get required service files from the previous branch you can type:

```
git show <previous branch>:app/services/auth/auth-service.js > app/services/auth/auth-service.js
```

example: remotes/origin/taskX:app/services/auth/auth-service.js > app/services/auth/auth-service.js


```
git show <previous branch>:app/services/user/user-service.js > app/services/user/user-service.js
```
### To install dependencies 

```
yarn install
```

```
bower install
```

### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To unit tests in development mode:
    
    grunt test:dev
    

To run verify jshint, tests and coverage:

    yarn test
