#Excersie 6: Using angular-xeditable
##Introduction
This lesson is about verify your AngularJS skills in the following fields:
* using angular-xeditable component

Expected result of this exercise is an application which allows user to write some information to form and save them automatically.

##Before you start, read about...
* angular-xeditable: [http://vitalets.github.io/angular-xeditable/](http://vitalets.github.io/angular-xeditable/)
* $watch: [https://docs.angularjs.org/api/ng/type/$rootScope.Scope](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)

##Requirements
###angular-xeditable.js package
In order to use angular-xeditable library you need to install it in your app `bower install` then include in your index.html file `bower_components/angular-xeditable/dist/js/xeditable.js`.

###dependency injection
Inject `xeditable` to your application module.

##The exercise 
To achieve this exercise you need to do following steps:
* replace all inputs to xeditable angular attributes
* create `showRefreshmentStatus()` and `showZoneStatus()` functions in `ReservationCtrl.js` to use them for xeditable components
* remove save button from index.html
* change `save()` function in `ReservationCtrl` to automatically run method using `$watch`

Good luck !
