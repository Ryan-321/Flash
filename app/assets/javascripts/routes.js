(function(){
  var router = angular.module('subjectRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/subjectsindex", {
        templateUrl: 'views/subjects/index.html',
        controller: 'subjectsController',
        controllerAs: 'subjectsCtrl'})
    }
  ])
})();
