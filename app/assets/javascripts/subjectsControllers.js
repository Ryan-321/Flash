(function(){

  var subjectsControllers = angular.module('subjectsControllers', ['ngRoute'])

 // index controller
  subjectsControllers.controller('subjectsController', ['Subject', function(Subject) {
      this.subjects = Subject.query(function(data){
        console.log(data) // checking to see what returning in Subject.query();
      });
    }]);

  // new controller (will create the subjects)
  subjectsControllers.controller('newSubjectsController',['$location','Subject', function($location, Subject){
    this.create = function() {
      console.log("new fired")
      console.log(this.subject)
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
      console.log("This workss")
        Subject.delete({id: id}, function(){
	      $location.path("/subjects")
      });
    }
    this.createCard = function(card){
      var self = this
      Card.save({subjectId: $routeParams.id}, card, function(card){
        self.subject.cards.push(self.card)
        self.card = {}, function() {
          $location.path("/subjects/" + self.card.id)
        }
      })
    }
    this.deleteCard = function(card) {
      var self = this;
      console.log(card)
      Card.delete({subjectId: this.subject.id, id: card.id}, function() {
        self.subject.cards = Card.query({subjectId: self.subject.id});
      });
    }
    this.editCard = function(card) {
      this.card = Card.get({subjectId: $routeParams.id, id: card.id})
      console.log(card)
      this.update = function() {
        this.card.update({id: this.subject.id})
      }
      // Card.$update({subjectId: card.subject_id, id: card.id}, function(card) {
      //   self.subject.cards = Card.query({subjectId: card.id});
      // });
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
