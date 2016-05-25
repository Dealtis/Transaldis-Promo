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
      return $http.post("http://51.254.101.196/transaldis/sitepromo/api/api.php/client", user);
    }
  });
