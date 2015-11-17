#Excercise 5: CRUD (Create, Read, Update, Delete)

##Summary

Expected result of this exercise is an application which allows user to create/read/update/delete row in the table.

##Goals

In order to complete this exercise you will need to follow these steps:

* add functions `query(), get(), save(), remove()` to `CandyDAO.js`
* use `$routeProvider` in `app.js` to route url to html files
* create `brainCandyList.html` with add/edit/delete option and `brainCandyListCtrl.js`
* create `brainCandyDetails.html` with save button and `brainCandyDetailsCtrl.js`

##Before you start, read about...
* $routeProvider: [https://egghead.io/lessons/angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)

##Backend mock configuration:

###GET /api/candy/{id}
Gets details of candy identified by numeric `id`.

###GET /api/candy
Gets list of all candies.

###POST /api/candy
Creates or updates candy. Request body should be stringified JSON representation of the candy.
If posted candy has no `id` or no candy with given `id` is found in the backend, then new candy is created with auto-generated `id`.

###DELETE /api/candy/{id}
Removes candy identified by numeric `id`.
Returns 200 HTTP status code with empty response body if candy has been found and removed; 404 otherwise.

##Setup

###To install dependencies 

```
npm install
```

```
bower install
```

###To start application in live reload mode

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To unit tests in development mode:
    
    grunt test:dev
    

To run verify jshint, tests and coverage:

    npm test
