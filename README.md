#Excersie 5: CRUD (Create, Read, Update, Delete)

##Introduction
This lesson is about following skills:
* writing controller
* writing view
* writing DAO
* binding data
* configure routing
* posting data to the backend

Expected result of this exercise is an application which allows user to create/read/update/delete row in the table.

##Before you start, read about...
* $routeProvider: [https://egghead.io/lessons/angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)

##The exercise
In order to complete this exercise you will need to follow these steps:
* add functions `query(), get(), save(), remove()` to `CandyDAO.js`
* use `$routeProvider` in `app.js` to route url to html files
* create `brainCandyList.html` with add/edit/delete option and `brainCandyListCtrl.js`
* create `brainCandyDetails.html` with save button and `brainCandyDetailsCtrl.js`

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
You should have installed `npm`, `bower`, `grunt`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start unit test, run

```
grunt karma
```

Good luck !
