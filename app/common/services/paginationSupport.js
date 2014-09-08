(function () {
  'use strict';


  function paginationSupport() {
    /*jshint validthis:true*/
    var mandatoryConfig = {maxResultsProperty: 'maxResults', firstResultProperty: 'firstResult'};
    var defaultConfig;

    this.setDefaultConfig = function (config) {
      defaultConfig = angular.extend({}, mandatoryConfig, config);
    };

    this.setDefaultConfig({maxResults: 20});

    this.$get = ['$rootScope', 'AsyncQueue', function ($rootScope, AsyncQueue) {

      function AbstractPagination(context, refreshFunction, asyncQueueOptions) {
        context.filter = context.filter || {};
        context.filter[defaultConfig.firstResultProperty] = context.filter[defaultConfig.firstResultProperty] || 0;
        context.filter[defaultConfig.maxResultsProperty] = context.filter[defaultConfig.maxResultsProperty] || defaultConfig[defaultConfig.maxResultsProperty];

        var doRefreshDueToPagination = angular.bind(null, refreshFunction, function (resultCount) {
          context.resultCount = resultCount;
        }, false);

        var doRefreshDueToFiltersChange = angular.bind(null, refreshFunction, function (resultCount) {
          context.resultCount = resultCount;
        }, true);

        function refreshDueToPagination() {
          AsyncQueue.add(doRefreshDueToPagination, asyncQueueOptions);
        }

        function refreshDueToFiltersChange() {
          AsyncQueue.add(doRefreshDueToFiltersChange, asyncQueueOptions);
        }

        function modelListener(newValue, oldValue) {
          if (newValue === oldValue) {
            return;
          }
          refreshDueToPagination();
        }

        function pageAwareModelListener(newValue, oldValue) {
          if (newValue === oldValue) {
            return;
          }
          context.currentPage = 1;
          refreshDueToFiltersChange();
        }

        angular.forEach(context.filter, function (value, key) {
          var listener = defaultConfig.firstResultProperty === key || defaultConfig.maxResultsProperty === key ? modelListener : pageAwareModelListener;
          if (context.$watch instanceof Function) {
            context.$watch('filter.' + key, listener, true);
          } else {
            $rootScope.$watch(function () {
              return context.filter[key];
            }, listener, true);
          }
        });
        //noinspection JSUnusedLocalSymbols
        function additionalFilterProcessor(value, key) {
          var context = this;
          $rootScope.$watch(function () {
            return context[key];
          }, pageAwareModelListener, true);
        }

        for (var i = 3; i < arguments.length; i++) {
          angular.forEach(arguments[i], additionalFilterProcessor, arguments[i]);
        }

        context.isPaginationNeeded = function () {
          return context.resultCount > context.filter[defaultConfig.maxResultsProperty];
        };


        function currentPageWatch(newValue, oldValue) {
          if (newValue === oldValue) {
            return;
          }
          context.filter[defaultConfig.firstResultProperty] = (newValue - 1) * context.filter[defaultConfig.maxResultsProperty];
        }

        if (context.$watch instanceof Function) {
          context.$watch('currentPage', currentPageWatch, true);
        } else {
          $rootScope.$watch(function () {
            return context.currentPage;
          }, currentPageWatch, true);
        }

        return refreshDueToFiltersChange;
      }

      return AbstractPagination;
    }];
  }

  angular.module('exerciseApp').provider('paginationSupport', paginationSupport);
})();
