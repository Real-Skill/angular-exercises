#Excersie 7: Typeahead
##Introduction

This lesson is about verify your AngularJS skills in the following fields:
* using angular-bootstrap component

Expecting result of this exercise is auto-complete (type-a-head) input component. Typing in the input will trigger a function which return list of suggestions.

## Before you start, read about...
* angular-bootstrap[http://angular-ui.github.io/bootstrap](http://angular-ui.github.io/bootstrap/)

##Requirements
###angular-bootstrap package

In order to use angular-bootstrap  library you need to install it in your app ```bower install``` then include in your index.html file ```bower_components/angular-bootstrap/ui-bootstrap-tpls.js```.

###dependency injection
Inject ```'ui.bootstrap'``` to your main app module injection list.

###route configuration
add this route to your application $routeProvider configuration
<pre><code>
        $routeProvider.when('/', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl as contactCtrl'
        });
</code></pre>

##The exercise

* write ```getContacts``` function body:
    * function should be bounded with html input,
    * function should handle with delivered by ContactDAO promise,
    * function should provide auto-complete array
* add necessary html typeahead attributes for input component in ```contact.html```

Good luck !