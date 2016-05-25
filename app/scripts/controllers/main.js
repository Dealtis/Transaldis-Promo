'use strict';

/**
 * @ngdoc function
 * @name transaldisSitePromoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transaldisSitePromoApp
 */
angular.module('transaldisSitePromoApp')
  .controller('MainCtrl', function($scope, $mdDialog, $mdMedia, $mdToast) {


    $scope.sign = function() {
      console.log("hemol");
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        templateUrl :"views/dialogmerci.html",
        controller: "DialogCtrl",
        locals: {
          signup: $scope.sign
        }
     });

    };
    $scope.openFromLeft = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
        controller: "DialogCtrl",
        templateUrl: "views/dialog.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen,
        locals: {
          signup: $scope.sign
        }
      });
    };
  });
