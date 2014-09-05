#Excersie 4: Using angular-route
##Introduction
This lesson is about verify your AngularJS skills in the following fields:
* writing controller
* binding data
* using angular-route component

Expecting result of this exercise is an application which allow user to route to ```postDetails.html```  thanks to add view button.

##Before you start, read about...
* ngRoute: [https://docs.angularjs.org/api/ngRoute](https://docs.angularjs.org/api/ngRoute)
* $routeProvider: [https://docs.angularjs.org/api/ngRoute/provider/$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)

##Requirements
###angular-route.js package
In order to use angular-route library you need to install it in your app ```bower install angular-route``` then include in your index.html file ```bower_components/angular-route/angular-route.js"```.

###dependency annotation
Inject ```'$routeParams'``` to PostDetailsCtrl.


##The exercise
To achieve this exercise you need to do following steps:
* use ```get()``` function from ```PostDAO.js``` in ```PostDetailsCtrl.js```
* add button which route you to ```postDetails.html```

Good luck !