(function(){
  var router = angular.module('subjectRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/", {
        templateUrl: 'app/assets/javascripts/views/subjects/index.html',
        controller: 'subjectsController',
        controllerAs: 'subjectsCtrl'})
    }
  ])
})();
