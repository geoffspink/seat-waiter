'use strict';

/* Controllers */

angular.module('theSeatWaiter.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', '$firebase', function( $scope, $firebase ) {
    // create empty object 'party' to capture the form values
    $scope.newParty = {
      name:   '',
      phone:  '',
      size:   ''
    };

    // Connect $scope.parties to live Firebase data
    var partiesRef = new Firebase('https://theseatwaiter.firebaseio.com/parties');
    // create empty array 'parties' to save the party object values
    $scope.parties = $firebase(partiesRef);

    // saveParty function will add the values from the object to the array
    $scope.saveParty = function() {
      $scope.parties.$add($scope.newParty);
      $scope.newParty = {
        name:   '',
        phone:  '',
        size:   ''
      };
    };

    // send SMS to notify party their table is ready
    $scope.sendSMS = function(phoneNumber) {
      var smsRef = new Firebase('https://theseatwaiter.firebaseio.com/sms');
      var sms = $firebase(smsRef);
      sms.$add({phoneNumber: phoneNumber});
    };
  }])
