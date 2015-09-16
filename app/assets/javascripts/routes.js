(function(){
  var router = angular.module('subjectRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/flash", {
        templateUrl: 'assets/views/subjects/index.html',
        controller: 'subjectsController',
        controllerAs: 'subjectsCtrl'})
    }
  ])
})();
