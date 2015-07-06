#Exercise 18: DAO

##The exercise
To achieve this exercise you need to do following steps:
* create `PreferenceDAO.js` file and add the following template
```
(function ()
{
    'use strict';

    function PreferenceDAO($resource)
    {
            var api = $resource('/api/preference/:a', null, {

            });
            
            return {
            
            }

    angular.module('exerciseApp').factory('PreferenceDAO', ['$resource', PreferenceDAO]);
})();
```

* add **PreferenceDAO** as an argument of `PreferenceCtrl` (don't forget about the module dependencies)
* in `PreferenceCtrl` file is located `getColorList` function, used by **select2**. Add to **return** in `PreferencesDAO` **query** function, taking  **filter** as an argument:
```
  query: function (filter)
            {
                return api.query(filter).$promise;
            }
```
* because `$httpBackend.whenGET(/\/api\/preference(\?.*)$/)` return **colorList** as array, you need add to **$resource** ` query: {isArray: true}`
* in `PreferenceCtrl` use **query** from **PreferenceDAO**, with `ctrl.filter` as an argument to load color list
* in **.then(function(...){...** part with **(color)** as an argument add following code and verify that you can select a color :

```
 var select2data = [];
                angular.forEach(color, function (value)
                {
                    select2data.push({id: value.id, text: value.name, hex: value.hex});
                });
                query.callback({results: select2data, more: false});
```

* add to **return** in `PreferencesDAO` **getMusicTypes** function, without any argument:
  
```
 getMusicTypes: function ()
            {
                return api.getMusicTypes().$promise;
            }
  ```
* because **getMusicTypes** is not default, you need add to **$resource** ` getMusicTypes: {}` with attributes:
    * `method: 'GET'`
    * `isArray: true`, because  `$httpBackend.whenGET(/\/api\/preference\/music$/)` return **musicTypesList** as array
    * `params: {a: 'music'}`, to tell the backend that you need a list of types of music

* use in `PreferenceCtrl` **getMusicTypes** from **PreferenceDAO** to load music type list

* in **.then(function(...){...** part assign result to `ctrl.musicTypeList`
* add **getFilmGenres** keeping in mind that `$httpBackend.whenGET(/\/api\/preference\/film/)` return film list as an object, then use it in `PreferenceCtrl` to load film genres, assign result to `ctrl.filmList`

* add to **return** in `PreferencesDAO` **save** function, taking  **data** as an argument:
```
         save: function (data) {
               return api.save(data).$promise;
           }
```
* take a look to `backendMock` file, to  `$httpBackend.whenPOST(/\/api\/preference/)`call
* use `save` in `addPreferences` function to save selected preferences **(ctrl.choices)** 
* in **.then(function(...){...** part with **(preferences)** as an argument add following code and verify that your selected data is saved : 

```
 ctrl.preferenceList = preferences;
                ctrl.choices = {name: '', color: '', music: null, filmGenres: []};

                angular.forEach(ctrl.filmList, function (item, key)
                {
                    if (item.id && item.checked == true) {

                        ctrl.filmList[key].checked = false;
                    }
                });
```

* add to **return** in `PreferencesDAO` **remove** function, taking **id** as an argument:
```
            remove : function(id){
                return api.remove({a: id}).$promise;
            }
```
* take a look to `backendMock` file, to  ` $httpBackend.whenDELETE(/\/api\/preference\/(\d+)/)` call
* use `remove` in `deletePreferences` function to remove selected preferences with **(id)** 
* in **.then(function(...){...** part with **(preferences)** as an argument add following code and verify that your selected preferences are removed: 

```
 ctrl.preferenceList = preferences;
              if (ctrl.preferenceList.length !== 0) {
                                  ctrl.preferenceList = preferences;
                              }
```

Good Luck!
