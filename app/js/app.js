'use strict';


// Declare app level module which depends on filters, and services
angular.module( 'theSeatWaiter', [
    'ngRoute',
    'theSeatWaiter.filters',
    'theSeatWaiter.services',
    'theSeatWaiter.directives',
    'theSeatWaiter.controllers',
    'firebase'
] ).config( ['$routeProvider', function( $routeProvider ) {
      $routeProvider.when( '/', {
        templateUrl: 'views/landing_page.html',
        controller: 'LandingPageController'
      } );
      $routeProvider.when('/waitlist', {
        templateUrl: "views/waitlist.html",
        controller: 'WaitlistController'
      } );
      $routeProvider.otherwise( {
        redirectTo: '/'
      } );
}] );
