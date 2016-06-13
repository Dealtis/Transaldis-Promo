'use strict';

var LoadingScreen = window.pleaseWait({
  logo: 'images/logo_transaldis.png',
  backgroundColor: '#ACD976',
  loadingHtml: '<div class="spinner"><div class ="double-bounce1" ></div><div class="double-bounce2"></div></div>'
});

/**
 * @ngdoc function
 * @name transaldisSitePromoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transaldisSitePromoApp
 */
angular.module('transaldisSitePromoApp')
  .controller('MainCtrl', function($scope, $mdDialog, $mdMedia) {
    $scope.sign = function() {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        templateUrl: 'views/dialogmerci.html',
        controller: 'DialogCtrl',
        fullscreen: useFullScreen,
        locals: {
          signup: $scope.sign
        }
      });
    };

    $scope.openFromLeft = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
        controller: 'DialogCtrl',
        templateUrl: 'views/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen,
        locals: {
          signup: $scope.sign
        }
      });
    };

    angular.element(document).ready(function() {
      LoadingScreen.finish();
      angular.element('.main-wrapper-content').addClass('animate');
    });
  });
