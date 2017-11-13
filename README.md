# Excersie 11: Drag and Drop 
## Introduction

This lesson is about verify your AngularJS skills in the following fields:

* using angular angular-drag-drop components

Expecting result of this exercise is an application which allow user to drag and drop buttons to separated area. In the green area you can drag the buttons to other area again.

## Before you start, read about...
* [angular-drag-drop](http://codef0rmer.github.io/angular-dragdrop/#/)

## Requirements
### angular-drag-drop.js package
In order to use angular-drag-droplibrary you need to install it in your app `bower install -S angular-dragdrop`. You need also `bower install jquery` and `bower install jquery-ui`
then include in your index.html file `bower_components/jquery/dist/jquery.js`,`bower_components/jquery-ui/jquery-ui.js` and `bower_components/angular-dragdrop/src/angular-dragdrop.min.js`


### dependency injection
Inject `'ngDragDrop'` to your application module.

## The exercise

To achieve this exercise you need to do following steps:

* use `data-drop` , `jqyoui-droppable` to make areas droppable
* use `data-drag` , `jqyoui-draggable` to make buttons draggable
* use `ng-model` to create container
* enjoy drag and drop buttons

Good luck !
