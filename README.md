# Exercise 1: Bind Posts

## Introduction

This lesson is about following skills:

* exposing data through controller's properties

* binding data

* using ng-repeat directive

Expected result of this exercise is an application which allows user to display posts from `BlogPostCtrl.js` like this:

| ID | Author | Title |
|----|--------|-------|
| 1  | Jack   | Diving Deep with Dependency Injection |
| 2  | Jill   | Practical End-to-End Testing with Protractor |

## Before you start, read about...
* ng-repeat: [https://docs.angularjs.org/api/ng/directive/ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) 

## The exercise

To complete this exercise you need to follow these steps:

* add array of `posts` in `BlogPostCtrl.js`, each post with properties corresponding to the table headers from `index.html`

* use `ng-repeat` to display the rows

## Setup
### To install dependencies

    yarn install
    
    bower install
    
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

Good luck!
