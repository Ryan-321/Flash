(function() {
  var subjectServices = angular.module('subjectServices', ['ngResource']);

  subjectServices.factory('Subject', ['$resource', function($resource) {
    return $resource('https://wdi-flash.herokuapp.com/subjects/:id.json', {}, {
      update: {method:'PUT'} // Medthod that needs to be added b/c $resouce doesn't support PUT, which we need for Editing
    });
  }]);
  subjectServices.factory('Card', ['$resource', function($resource) {
    return $resource('https://wdi-flash.herokuapp.com/subjects/:subjectId/cards/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})()

// localhost:3000 is local url

// remember to change the s to test in development

// use when pushing up to heroku, https://wdi-flash.herokuapp.com
