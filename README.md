# Exercise 16: Double request
## Introduction
This lesson is about following skill :

* code debugging

Expected result of this exercise is an application where first controller send event to second controller, then second one send back answer (1 event = 1 answer). Events and answers goes to one table.

| John         | Jane |
|--------------|------|
| Hello        |      |
|              | Hi   |
| How are you? |      |
|              | Fine |

| Jane | John         |
|------|--------------|
|      | Hello        |
| Hi   |              |
|      | How are you? |
| Fine |              |

## Before you start, read about...
* $routeProvider: [https://docs.angularjs.org/api/ngRoute/provider/$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
* $scope.$broadcast/$emit: [https://docs.angularjs.org/api/ng/type/$rootScope.Scope](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)


## Setup

### To install dependencies

    yarn install
    bower install
    npm run webdriver-manager-update
    
### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test

Good luck!
