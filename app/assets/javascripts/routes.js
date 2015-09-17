(function(){
  var router = angular.module('subjectRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/subjects", {
        templateUrl: 'assets/views/subjects/index.html',
        controller: 'subjectsController',
        controllerAs: 'subjectsCtrl'
      }).
      when("/subjects/new", {
        templateUrl: 'assets/views/subjects/new.html',
        controller: 'newSubjectsController',
        controllerAs: 'newSubjectsCtrl'
      }).
      when("/subjects/:id", {
        templateUrl: 'assets/views/subjects/show.html',
        controller: 'showSubjectsController',
        controllerAs: 'showSubjectsCtrl'
      }).
      when("/subjects/:id/edit", {
        templateUrl: 'assets/views/subjects/edit.html',
        controller: 'editSubjectsController',
        controllerAs: 'editSubjectsCtrl'
      }).
      otherwise({
        redirectTo: '/subjects'
      })
    }
  ])
})();
