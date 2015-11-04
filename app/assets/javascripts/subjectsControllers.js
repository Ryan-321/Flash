(function(){

  var subjectsControllers = angular.module('subjectsControllers', ['ngRoute'])

 // index controller
  subjectsControllers.controller('subjectsController', ['Subject', function(Subject) {
      this.subjects = Subject.query(function(data){
      });
    }]);

  // new controller (will create the subjects)
  subjectsControllers.controller('newSubjectsController',['$location','Subject', function($location, Subject){
    this.create = function() {
      Subject.save(this.subject, function(subject){ // only need subject if I want to pass in ID to URL
        $location.path("/subjects/")
      })
    }
  }]); // closes newSubjectsController

  // show controller
  subjectsControllers.controller('showSubjectsController', ['$routeParams','$location','$http', 'Subject', 'Card', function($routeParams, $location, $http, Subject, Card){
    this.subject = Subject.get({id: $routeParams.id},  function(subject){
      subject.cards = Card.query({subjectId: $routeParams.id});
    }
  )
    this.delete = function(id){
        Subject.delete({id: id}, function(){
	      $location.path("/subjects")
      });
    }
    this.createCard = function(card){
      var self = this
      Card.save({subjectId: $routeParams.id}, self.card, function(card){
        self.subject.cards.push(self.card),
        self.card = {}
      })
      $location.path("/subjects/" + this.subject.id)
    }
    this.deleteCard = function(card) {
      var self = this;
      Card.delete({subjectId: this.subject.id, id: card.id}, function() {
        self.subject.cards = Card.query({subjectId: self.subject.id});
      });
    }

  }]); // closes showSubjectsController

  // edit controller
  subjectsControllers.controller('editSubjectsController', ['$location', '$routeParams', 'Subject', function($location, $routeParams, Subject){
    this.subject = Subject.get({id: $routeParams.id}); // identifies the subject using routeParams to grab id from URL
    this.update = function(){
    this.subject.$update({id: this.subject.id});
    $location.path("/subjects/" + this.subject.id)
    }
  }]); // closes editSubjectsController


})()
