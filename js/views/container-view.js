// Container to hold all views

window.hangman = window.hangman || {};

window.hangman.ContainerView = Backbone.View.extend({
	
el: $("body"), // bind to existing html skeleton

	events: {
		'click #new-game' : 'newGame',
		'click #enter-button' : 'compare',
	},

	initialize: function(){
		var array;
		this.wordColl = new window.hangman.Word;
		this.wordView = new window.hangman.WordView({collection : this.wordColl});
		this.badLetter = new window.hangman.BadLetter;
		this.manView = new window.hangman.ManView({collection : this.badLetter});
		this.wrongLetView = new window.hangman.WrongLetterView({collection : this.badLetter});

	},

	done : function(){
		if(this.wordColl.done()){
			alert("You won!");
		};
	},

	compare : function(){	
		var letter = $('#enter-letter').val();
		$('#enter-letter').val('');
		var out = this.wordColl.compareLetter(letter);
		if(!out){
			this.badLetter.add({'letter': letter});
		}else{
		}
		if(this.badLetter.death()){
			this.wordColl.death();
		};
		this.done();
	},

	newGame :function(){
		this.badLetter.newWord();
		this.wordColl.newWord();
	},

	render : function(model){
		return this;
	},


});


	