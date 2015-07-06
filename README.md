#Exercise 14: Select 2

##The exercise
To achieve this exercise you need to do following steps:
* in `phone.html` change `<input type="text">` to `hidden`
* use `ng-model` directive to bind with `selectedPhones` array
* in `PhoneListCtrl.js` file create `select2Options` object with attributes: `allowClear` set to true, `multiple` to false, `width` as you wish (remember about `px` suffix), `minimumInputLength` to 1 and `query` to `getPhoneList` function (set it without brackets)
* in `getPhoneList` set `filter.query` to `query.term` (your query write to the input) and call on it `toLowerCase()` function
* Use function `query` from `PhoneDAO` with filter as an argument to get the list phones that match the query
* then you have to create private array `select2data`, repackage data to it with `angular.forEach()` and call `callback` on `query` like below 

```
 angular.forEach(phone, function (value) {
 select2data.push({id: value.id, text: value.name, price: value.price});
 });
 query.callback({results: select2data, more: false});
```

* in `phone.html` add `ui-select2` to input and set it to `select2Options`
* set the table cell to the information about selected phone
* below create another select2 with `select2OptionsB` and `multiple` attribute set to true
* be sure, to display in the second table, all selected phones

Good Luck!
