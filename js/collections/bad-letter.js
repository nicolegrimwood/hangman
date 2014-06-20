// A letter the second player has guessed
// 
// Consists of a "title" and "placement" 
// "placement" is a string holding integer values indicating placement of letter

window.hangman = window.hangman || {};

window.hangman.BadLetter = Backbone.Collection.extend({
	//Default attributes
	model: hangman.Letter, 

	initialize : function(){
	},
	
	newWord: function(){
	this.reset();
	this.trigger('change');
	},

	death: function(){
		// if(this.length==10){
		// 	alert("You Lost :(");
		// }
		return this.length==10;
	}

});










