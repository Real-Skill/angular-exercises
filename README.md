#Excersie 3: Creating own DAO resource
##Introduction
This lesson is about verify your AngularJS skills in the following fields:
* writing controller
* writing DAO file
* binding data

Expecting result of this exercise is an application which allow user to display posts array from ```app.js``` using DAO file.

##Before you start, read about...
* Dependency Injection: [https://docs.angularjs.org/guide/di](https://docs.angularjs.org/guide/di)
* $resource: [https://docs.angularjs.org/api/ngResource/service/$resource](https://docs.angularjs.org/api/ngResource/service/$resource)
* Take a look at the DAO file from the previous exercises.



##Requirements
###angular-resource.js package
In order to use angular-resource library you need to install it in your app ```bower install angular-resource``` then include in your index.html file ```bower_components/angular-resource/angular-resource.js```.

###dependency annotation
Inject ```'$resource'``` to ```AnnouncementDAO.js```.


##The exercise
To achieve this exercise you need to do following steps:
* add ```query()``` function to ```AnnouncementDAO.js```
* use ```query()``` function form ```AnnouncementDAO.js``` in ```AnnouncementListCtrl.js```
* display the table

Good luck !
