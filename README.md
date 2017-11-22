# Excersie 2: Bind Posts From DAO

## Introduction
This lesson is about following skills:

* dependency injection
* fetching data using promise

Expected result of this exercise is an application which allows user to display posts array from `app.js` using DAO file like this:

| ID | Author | Title |
|----|--------|-------|
| 1  | Jack   | Diving Deep with Dependency Injection |
| 2  | Jill   | Practical End-to-End Testing with Protractor |

## Before you start, read about...

* AngularJS promises: [https://egghead.io/lessons/angularjs-promises ](https://egghead.io/lessons/angularjs-promises)
* $resource: [https://docs.angularjs.org/api/ngResource/service/$resource](https://docs.angularjs.org/api/ngResource/service/$resource)

## The exercise

In order to complete this exercise you will need to follow these steps:

* use `query()` function form `PostDAO.js` in `BlogPostCtrl.js` to retrieve data
* display the table 

## Setup

### To install dependencies 

    yarn install

    bower install

### To start application in live reload mode

    grunt serve
    
### Jshint
To run jshint:
    
    grunt jshint:default

### Run tests

To run unit tests in development mode:
    
    grunt test:dev
    

To run jshint, tests and coverage:

    yarn test

Good luck!
