#Patch Model Service

##Summary

Generic service for generation JSON Patch requests based on model changes.

An app provides API for listing and updating various objects. Each object type has it's own endpoint.
We want to issue XHR requests to update backend on every model change.
In order to avoid sending back and forth full object we will only send JSON Patches.

##Goal

Your goal is to implement the service that would watch for changes on given object and issue JSON Patch requests to the backend.
Make the service as reusable as possible.
For generating patches you can use [https://www.npmjs.com/package/fast-json-patch](https://www.npmjs.com/package/fast-json-patch).
The service should be configurable like this:

```
patchModel(object, $scope).api('/api/endpoint').ignore(['/photo']);
```
or
```
patchModel(object, $scope).api('/api/endpoint').ignore(['/photo']).id(object._id);
```
or
```
patchModel(object, $scope).callback(callback);
```

Which means that `object` will be watched as long as `$scope` is not destroyed. If there are any changes then JSON Patch should be created and sent
to the backend to `/api/endpoint/:id` using `PATCH` HTTP method where `:id` is value of `object.id`. User may also provide id explicitly.
Sometimes there is a need to ignore some properties, as they are being used only on the frontend and should not be saved to the backend.
By default ignore `$$hashKey` property and if user wants to ignore others, let them specify explicitely.

If `callback` is provided then instead of sending request to the backend the `callback` should be invoked with JSON Patch data.

##API

For now there are two entities: attraction and note. Here is API you might need to interact with in order to finish this task.

###Update attraction
`PATCH /api/attraction/:id`
`{}`
###Update note
`PATCH /api/note/:id`
`{}`

##Setup

Run `grunt serve` to start browser in live reload mode.

Run `grunt karma` to run unit tests.
