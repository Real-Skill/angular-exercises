# Excersie 8: Multilanguage using angular-gettext

## Introduction

This task will verify your AngularJS skills in the following fields:

* writing controller
* extracting strings that should be translated using a grunt task 
* using poedit application

The expected result of this exercise is an application which allows the user to display output text on the page in English, German and Polish.

## Before you start, read about

* [angular-gettext](http://angular-gettext.rocketeer.be)

## Requirements

### angular-gettext.js package
Include `angular-gettext` library in your index.html file

    bower_components/angular-gettext/dist/angular-gettext.js

### poedit - gettext translations editor
Install poedit: [http://poedit.net](http://poedit.net)

### dependency injection
Inject `'gettext'` to your application module.

## The exercise

To pass this task you need to complete the following steps:

* add necessary translate attributes in `index.html` file to mark the strings as translatable.
* use grunt command `grunt nggettext_extract` to extract translatable strings into pl.pot file
* use `poedit` aplication to create `en.po` and `de.po` files (necessary translations can be found in the `vendor/note.txt`)
* use grunt command `grunt nggettext_compile` to convert the translated `.po` files into a JavaScript file that can be included in the project.
* add `changeLanguage()` function and bind it to the appropriate buttons
* remember that the name of the buttons should also be translated

## Setup

### To install dependencies 

    npm install
    
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

    npm test

Good luck!
