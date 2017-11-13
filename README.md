# Excersie 10: Advance typeahead component
## Introduction
This lesson is about verify your AngularJS skills in the following fields:

* writing controller
* reading documentation 
* reading jquery code examples and fit it into angular context
* integrating 3rd party library (jquery wrapped)
* using promises through DAO resource

Expecting result of this exercise is an application allowed user to search artist in external web service and multiple select (up to 10 items) from suggested artists list.
Prepared project utilise [musicbrainz webservice version2](http://musicbrainz.org/doc/Development/XML_Web_Service/Version_2), entity artist as DAO resource ```Artist```. 
Before you start, it's recommend to read [angular-ui/ui-select2](https://github.com/angular-ui/ui-select2) documentation.
**Note that ```ui-select2``` is wrapped jquery library ```select2```, so full documentation you will find on [parent library website](http://ivaynberg.github.io/select2/).**  

## Requirements
### angular-ui-select2 package
Dependency ```angular-ui-select2``` is already in ```bower.json``` file. So its enough to run bower install. Although there is one entry with ```angular-ui-select2``` it's got own dependencies. One you are interested about is ```select2```; be aware it's have to be include first, before angular wrapped version of this library load. 

### dependency injection
Your application is already injected with following modules: ```'ngRoute', 'ngResource', 'ui.select2'```.

## The exercise
To achieve this exercise you need to do following steps:

*  Implement search function body in ```Ngselect2Ctrl``` controller file. Hint: check ```query.callback``` usage in select2 documentation.
*  Fill ```select2options``` array with 4 items. One of those is necessary to make component work. Allow user multiple choice by another; also use correct options to set minimum input length at 1 and maximum selection size on 10

Good luck !
