(function() {
  var subjectServices = angular.module('subjectServices', ['ngResource']);

  subjectServices.factory('Subject', ['$resource', function($resource) {
    return $resource('http://localhost:3000/subjects/:id.json', {}, {
      update: {method:'PUT'} // Medthod that needs to be added b/c $resouce doesn't support PUT, which we need for Editing
    });
  }]);
  // grumbleServices.factory('Comment', ['$resource', function($resource) {
  //   return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
  //     update: {method:'PUT'}
  //   });
  // }]);
})()
