# Excercise 5: CRUD (Create, Read, Update, Delete)

## Summary

Expected result of this task is an application which allows user to create/read/update/delete row in the table.

Leitmotif is brain candy, so take a look at sample brain candy structure:

    {
        id: 1,
        name: 'Jenga',
        author: ' Leslie Scott'
    }

## Goals

In order to complete this exercise you will need to follow these steps:

* create and add `query()`, `get()`, `save()` and `delete()` functions to `CandyDAO.js`    
* create `brainCandyList.html` view with a table of `brainCandies` and possibility to add new and edit/delete existing `brainCandy`
* create `brainCandyDetails.html` view responsible for saving new and editing existing `brainCandy`
* each view should have his own controller: `brainCandyListCtrl`, `brainCandyDetailsCtrl`
* use `$routeProvider` in `app.js` to configure routing (by default, you should display the view with all `brainCandies`)

Use elements with appropriate `id` in order to enable identification by tests:

| button | id           | redirect    | action                                                 |
|--------|--------------|-------------|--------------------------------------------------------|
| Add    | addButton    | /save       | open new view with form to create a new brain candy    |
| Edit   | editButton   | /details/id | open new view with form to edit specified brain candy  |
| Delete | deleteButton | -           | remove specified brain candy                           |
| Save   | saveButton   | default     | save new brain candy / changes and return to main view |
| Back   | backButton   | default     | return to main view from form view                     |


| input            | id     |
|------------------|--------|
| Brain candy name | name   |
| author           | author |

Brain candies list table structure:

    <table id="brainCandiesTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>                                  
            </tr>
        </tbody>
    </table>


## Backend mock configuration:

### GET /api/candy/{id}
Gets details of candy identified by numeric `id`.

### GET /api/candy
Gets list of all candies

### POST /api/candy
Creates or updates candy. Request body should be stringified JSON representation of the candy.
If posted candy has no `id` or no candy with githeven `id` is found in the backend, then new candy is created with auto-generated `id`.

### DELETE /api/candy/{id}
Removes candy identified by numeric `id`.
Returns 200 HTTP status code with empty response body if candy has been found and removed; 404 otherwise.

## Setup

### To install dependencies 

```
npm install
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
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    npm test

Good luck!
