'use strict';
/**
 * @ngdoc overview
 * @name transaldisSitePromoApp
 * @description
 * # transaldisSitePromoApp
 *
 * Main module of the application.
 */
angular
  .module('transaldisSitePromoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'vcRecaptcha'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
