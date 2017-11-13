# Excersie 9: File upload exercise

## Introduction
This lesson is about verify your AngularJS skills in the following fields:

* writing controller
* setting up and configuring 3rd party library
* receiving and decoding JSON response from server

Expecting result of this exercise is an application which allow user to upload single or multiple files. After successful upload and handle server response, special image will shown.
Before you start, read ng-flow documentation: [https://github.com/flowjs/ng-flow](https://github.com/flowjs/ng-flow). 

## Requirements

### ng-flow.js package
In order to use ng-flow library you need to install it in your app ```bower install ng-flow``` and 
include in your index.html file ```bower_components/ng-flow/dist/ng-flow-standalone.js```.

### dependency injection
Inject ```'flow'``` to your application module.

## The exercise
To achieve this exercise you need to do following steps:

* add necessary flow attributes to top-level div in ```upload.html``` file. There is 4 missing attributes: ```flow-init, flow-file-success, flow-files-submitted, flow-complete```. Three of those should be bound to correct function in ```uploadCtrl```. Set upload traget url to ```'/backend'```. 
* fill function body in ```startUpload``` and ```fileSuccess```. 

## Setup
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
