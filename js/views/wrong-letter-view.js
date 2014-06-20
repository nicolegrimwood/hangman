// View for incorrect letters
window.hangman = window.hangman || {};


window.hangman.WrongLetterView = Backbone.View.extend({

tagName: 'b',

template: _.template($('#wrong-letter-template').html()),

events: {

},

initialize: function(){
	this.listenTo(this.collection,'change',this.render);
	this.listenTo(this.collection,'add',this.render);
	this.render();
},


render: function(){
	var coll = this.collection.toJSON();
	var myString = "";
	//add every letter from bad letter collection
	for(i=0;i<this.collection.length;i++){
		theLetter = coll[i];
		myString = myString.concat(theLetter.letter+" ");
	}
	this.$el.html(this.template({letters : myString}));
	$("#letter-list").append(this.$el);
	return this;
},

});





