(function(){

  var subjectsController = angular.module('subjectsController', ['ngRoute'])

 // index controller
  subjectsController.controller('subjectsController', ['Subject', function(Subject) {
      this.subjects = Subject.query(function(data){
        console.log(data)
      });
      console.log(this.subjects)
    }]);

})()
