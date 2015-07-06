#Excersie 12: Pagination Support

##Introduction
This lesson is about verify your AngularJS skills in the following fields:

* using angular paginationSuppotr component

Expecting result of this exercise is an application which allow user to split data in table to separate page and search fraze in this data.

##Before you start

* paginationSupport is ITCrowd's original package depends on asyncQueue and ui-bootstrap. We use it like other angular dependencys - by adding to controller arguments.
* To use paginationSupport we must create function

```javascript
var refreshPost = paginationSupport(this, function (callback) {
    exampleDAO.query(ctrl.filter).then(function(data){
        ctrl.exampleData = data.resultList;
        callback(data.totalCount);
    });
});
```

* Like we see query() takes argument filter which we must create on controller. searchQuery is search fraze and maxResults is maximum data rows on each page

```javascript
ctrl.filter = {searchQuery: null, maxResults: 5};
```

* To the backend return proper data, GET method must return object with data to actual open page and number of total elements

```javascript
return [200, {resultList: result, totalCount: count}];
```

* If we want search in returned data we must add proper input element to the site, and bind then to filter.searchQuery

```javascript
<input type="search" class="form-control" ng-model="exampleCtrl.filter.searchQuery" placeholder="Search..."/>
```

* At the end we must add pagination element to the site, to display all pages and move between them. This is pagination directive from [Angular UI Boostrap](http://angular-ui.github.io/bootstrap/).

```javascript
<pagination class="pull-right" ng-model="postList.currentPage" total-items="exampleCtrl.resultCount" items-per-page="exampleCtrl.filter.maxResults" max-size="5"
                boundary-links="true" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"
                ng-show="exampleCtrl.isPaginationNeeded()"></pagination>
```

##Requirements

###paginationSupport.js package
In order to use paginationSupport you need to install it in your app ```bower install``` to install angular-boostrap.

###dependency injection
Inject ```'ui.bootstrap'``` to your application module.

##The exercise
To achieve this exercise you need to do following steps:

* add ```paginationSupport``` to your controller dependencys
* change ```refresch``` method using ```paginationSupport```
* add ```filter``` element to your controller
* uncomment proper ```whenGET``` method in 80-99 lines to replace actual ```GET``` method in lines 101-104 in ```app.js```
* bind input to ```filter.searchQuery```

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

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
