## Introduction
This lesson is about verify your AngularJS skills in the following fields:

* writing controller
* promise handling
* using filter in controller
* utilising angular-bootstrap component

Expecting result of this exercise is auto-complete (type-a-head) input component. Typing in the input will trigger a function which return list of suggestions. This exercise is based on angular-bootstrap component, so its recommend to read typeahead directive documentation at [angular-bootstrap website](http://angular-ui.github.io/bootstrap/) before you start. 
## Requirements
### angular-bootstrap package
To complete this exercise you need to include angular-bootstrap components. If you're using bower,
simply type:
<pre><code>bower install --save angular-bootstrap</code></pre>
Flag ```save``` will add entry with angular-bootstrap dependency to bower.json file .You can manually install angular-bootstrap from [this website](http://angular-ui.github.io/bootstrap/)
Don't forget to **include ui-bootstrap-tpls.js** in your index.html page; angular-bootstrap depends on **angularjs &amp; bootstrap** css, so they have to be **included first**.
### dependency injection
simply add ```'ui.bootstrap'``` to your main app module injection list.
### route configuration
add this route to your application $routeProvider configuration
<pre><code>
.when('/typeahead', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl as typeahead'
      })
</code></pre>
## The exercise
Let's implement auto-complete functionality. You starting with 3 files:
 
1. ```typeahead.js``` containing ```TypeaheadCtrl``` controller with alias ```typeahead```. (If you are confused about ```NameCtrl as alias``` syntax, you can read more about this [here](http://www.thinkster.io/angularjs/GmI3KetKo6/angularjs-experimental-controller-as-syntax) and [here](http://toddmotto.com/digging-into-angulars-controller-as-syntax/), or just assume we are using ```this``` instead of ```$scope``` in controller and prefix with ```typeahead.``` each variable bining in view.)
2. ```typeahead.html``` corresponding view markup
3. ```ContactDAO.js``` factory that provide you necessary data for this exercise

### Tasks
In order to complete this exercise you are required to do following tasks:

1. Write ```getContacts``` function body. Hints:
    * function should be bounded with html input,
    * function should handle with delivered by ContactDAO promise,
    * function should provide auto-complete array
2. Add necessary html typeahead attributes for input component in ```typeahead.html```
    * there are 2 missing attributes
    
Good luck !