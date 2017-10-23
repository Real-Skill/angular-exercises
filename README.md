# Auth App Exercise
## Part I - API authentication

## Summary
This is an application with simple token based authentication.

The application provides API for authenticating the user based on credentials (username and password).
We want to authenticate an existing user or to create a new one, and provide them with access to the resources available
only to the registered users.

## Goal

Implement simple service methods that will be used for authentication using REST. You are given a few mocked endpoints that 
are required for the application to run. Moreover, use $cookies to persist token for the user.
We need the following services:

```
  AuthService (auth-service.js)
```

**Methods:**

    * isAuthenticated() - it returns boolean value if the token cookie is set
    * login(name, password) - authenticate the user given the name (user name) and password. Set token cookie. It should return a promise.
    * logout() - de-authenticate the user and remove the token cookie. It should return a promise

and

```
  UserService (user-service.js)
```

**Methods:**

    * getCurrent() - get current user 'name' using XHR Authorization token headers
    * register(name, password) - register the user given the new name (user name) and password. It should automatically login the new user.


## API

**Get current user**

`GET /user/current`

It returns the current user object {name: <user name>}

**Register new user**

`POST /user/register`

It returns authentication token for the new user {token: <token>} if registration was successful

**Authenticate user**

`POST /auth/login`

Provided correct login and password, it returns authentication token for the user {token: <token>}

**Unauthenticate user**

`POST /auth/logout`

It returns no value

## Setup

You should have  `npm, bower, grunt and grunt-cli` packages installed to run this example.
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

It will run the application in your default system browser.

