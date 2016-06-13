'use strict';

/**
 * @ngdoc function
 * @name transaldisSitePromoApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the transaldisSitePromoApp
 */
angular.module('transaldisSitePromoApp')
  .controller('DialogCtrl', function($scope, $mdDialog, bddmysql, signup) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.submit = function(user) {
      console.log(user);
      //push en bdd
      bddmysql.insertClient(user)
        .success(function() {
          $mdDialog.hide();
          signup();
        });
    };
  });
