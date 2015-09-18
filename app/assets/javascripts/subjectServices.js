(function() {
  var subjectServices = angular.module('subjectServices', ['ngResource']);

  subjectServices.factory('Subject', ['$resource', function($resource) {
    return $resource('https://wdi-flash.herokuapp.com/:id.json', {}, {
      update: {method:'PUT'} // Medthod that needs to be added b/c $resouce doesn't support PUT, which we need for Editing
    });
  }]);
  subjectServices.factory('Card', ['$resource', function($resource) {
    return $resource('https://wdi-flash.herokuapp.com/:subjectId/cards/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})()

// http://localhost:3000 is local url

// use when pushing up to heroku, https://wdi-flash.herokuapp.com
