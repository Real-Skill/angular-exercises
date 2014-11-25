#Exercise 16: Double request
##Introduction
This lesson is about following skill :
* code debugging

Expected result of this exercise is an application where one controller send event to other controller, then he send back answer (1 event = 1 answer). Events and answers goes to one table.

| John         | Jane |
|--------------|------|
| Hello        |      |
|              | Hi   |
| How are you? |      |
|              | Fine |

| Jane | John         |
|------|--------------|
|      | Hello        |
| Hi   |              |
|      | How are you? |
| Fine |              |

##Before you start, read about...
* $routeProvider: [https://docs.angularjs.org/api/ngRoute/provider/$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
* $scope.$broadcast/$emit: [https://docs.angularjs.org/api/ng/type/$rootScope.Scope](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)

Good luck !
