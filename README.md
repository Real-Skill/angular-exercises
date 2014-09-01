angular-exercises
===================
##Main goal
This project was created for verify AngularJS skills.

##Table of content
####exercise 1: Bind posts from the controller to the table.
We start with a ready-controller BlogPostCtrl. You must add property "posts", hardcode to her table of posts and add ng-repeat directive to index.html file.
####exercise 2: Bind posts from DAO with the controller to the table.
We start with the same example of what the exercise1. Only change is that we have ready-dao PostDAO.js and app.js with answer to query. You have to add call to PostDAO in controller and bind data to table.
####exercise 3: Bind announcements to the table.
We start only with the app.js with answer to query. You have to create controller, DAO files and table.
####exercise 4: Routing to post details page.
We start with all ready created DAO, html files, app.js and PostListCtrl.js. You have to add specific view button in postList.html to route to postDetails.htm and edit PostDetailsCtrl to show data from PostDAO.
####exercise 5: Create CRUD (create, read, update, delete) - brainCandy app
To do this, you have to create all controlers: brainCandyListCtrl.js, brainCandyDetailsCtrl.js and views: brainCandyList.html, brainCandyDetails.html using CandyDAO.js with method to all 4 CRUD method.


## To run a project
<pre><code>npm install </code></pre>
<pre><code>bower install</code></pre>
<pre><code>grunt serve </code></pre>
