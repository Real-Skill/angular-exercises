#Excersie 8: Multilanguage using angular-gettext
##Introduction
This lesson is about verify your AngularJS skills in the following fields:

* writing controller
* extracting strings that should be translated using a grunt task 
* using poedit application

Expecting result of this exercise is an application which allow user to display output text on the page in English, German and Polish .

##Before you start, read about...
angular-gettext: [http://angular-gettext.rocketeer.be](http://angular-gettext.rocketeer.be). 

##Requirements
###angular-gettext.js package
In order to use angular-gettext library you need to install it in your app ```bower install --save angular-gettext``` and ```npm install grunt-angular-gettext --save-dev```
then include in your index.html file ```bower_components/angular-gettext/dist/angular-gettext.js"```.

###poedit - gettext translations editor
Install poedit: [http://poedit.net](http://poedit.net)

###dependency injection
Inject ```'gettext'``` to your application module.

##The exercise
To achieve this exercise you need to do following steps:
* add necessary translate attributes in index.html file to mark strings are as translatable.
* use grunt command ```grunt nggettext_extract``` to extracting translatable strings into pl.pot file
* use ```poedit``` aplication to create en.po and de.po files (necessary translations can be found in the ```vendor/note.txt```)
* use grunt command ```grunt nggettext_compile``` to converts translated .po files into a JavaScript file that can be included in the project.
* add ```changeLanguage()``` function and bind it with buttons
* remember the name of the buttons should also be translated

Good luck !
