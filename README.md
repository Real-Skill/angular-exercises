# Auth App Exercise
## Part I - API authentication

## Summary
Application with simple token based authentication.

Application provides API for authenticating the user based on credentials (username and password).
We want to authenticate existing user or create new and provide them with access to resources available
only to registered users.

## Goal

Implement simple service methods that will be used for authentication using REST. You are given a few mocked endpoints that 
are required for the application to run. Moreover, use $cookies to persist token for user.
We need following services:

```
  AuthService (auth-service.js)
```

**Methods:**

    * isAuthenticated() - return boolean value depending if token cookie is set
    * login(name, password) - authenticate the user given the name(user name) and password. Set token cookie. Should return promise.
    * logout() - de-authenticate the user and remove the token cookie. Should return promise

and

```
  UserService (user-service.js)
```

**Methods:**

    * getCurrent() - get current user 'name' using XHR Authorization token headers
    * register(name, password) - register the user given the new name(user name) and password. It should automatically login new user.


## API

**Get current user**

`GET /user/current`

Returns current user object {name: <user name>}

**Register new user**

`POST /user/register`

Returns authentication token for new user {token: <token>} if registration was successful

**Authenticate user**

`POST /auth/login`

Provided correct login and password, returns authentication token for user {token: <token>}

**Unauthenticate user**

`POST /auth/logout`

No return value

## Setup

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

