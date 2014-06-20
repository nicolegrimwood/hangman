// View for letters

//$(function() {

window.hangman = window.hangman || {};


window.hangman.LetterView = Backbone.View.extend({

el: $("body"),

letterTemplate: _.template($('#letter-template').html()),

// DOM events
events: {

	'click #enter-button' : 'showLetter',
},

// letter view listens for changes in model
initialize: function(){
	this.letter = new window.hangman.Letter;
	this.render(this.letter);
},

showLetter: function(){
	console.log("show letter");
 	var myLetter = $("#enter-letter").val();
 	//this.letters.add({title: letter});
 	this.letter.set({title: myLetter});
 	this.render(this.letter);
},


render: function(model){
	//$("#letter-list").append(model.get("title")+" ");
	console.log("rendered");
	return this;
},

});

// var view = new window.hangman.CorrectLetterView({el: 'body'});

//});



