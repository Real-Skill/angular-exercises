#Excersie 3: Creating own DAO resource

##Introduction

This lesson is about following skills :

* writing DAO file using ngResource

* add bower dependency

Expected result of this exercise is an application which allows user to display posts array from `app.js` using DAO file like this:

| ID | Title | Description |
|----|-------|-------------|
| 1  | Announcement 1 | I want to buy new car... |
| 2  | Announcement 2 | I want to buy new bike... |
| 3  | Announcement 3 | I want to buy new-old Fiat 126 p... |
| 4  | Announcement 4 | I want to buy something to eat... |

##Before you start, read about...
* Dependency Injection: [https://docs.angularjs.org/guide/di](https://docs.angularjs.org/guide/di)
* $resource: [https://docs.angularjs.org/api/ngResource/service/$resource](https://docs.angularjs.org/api/ngResource/service/$resource)
* Take a look at the DAO file from the previous exercises.

##Hints
###angular-resource.js package
In order to use angular-resource library you need to install it in your app `bower install` then include in your index.html file `bower_components/angular-resource/angular-resource.js`.

###dependency annotation
Inject `'$resource'` to `AnnouncementDAO.js`.

##The exercise

In order to complete this exercise you will need to follow these steps:

* add `query()` function to `AnnouncementDAO.js`

* use `query()` function form `AnnouncementDAO.js` in `AnnouncementListCtrl.js`

* display the table

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
