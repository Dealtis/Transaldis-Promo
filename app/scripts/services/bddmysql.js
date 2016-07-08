'use strict';

/**
 * @ngdoc service
 * @name transaldisSitePromoApp.bddmysql
 * @description
 * # bddmysql
 * Service in the transaldisSitePromoApp.
 */
angular.module('transaldisSitePromoApp')
  .service('bddmysql', function($http) {
    this.insertClient = function(user) {
      return $http.post('http://172.16.1.13/transaldis/api.php/client', user);
    };
  });
