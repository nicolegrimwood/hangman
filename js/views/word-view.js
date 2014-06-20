// view for correct letters

window.hangman = window.hangman || {};


window.hangman.WordView = Backbone.View.extend({


tagName: 'b',

template: _.template($('#word-template').html()),

events: {

},

initialize: function(){
	this.listenTo(this.collection,'change',this.render);
	this.listenTo(this.collection,'add',this.render);
	this.render();
},

render: function(){
	var coll = this.collection.toJSON();
	//iterate through collection to display either _ or letter
	var myString = "   ";
	for(i=0;i<coll.length;i++){
		var theLetter = coll[i];
		if(theLetter.filledIn==true){
			myString = myString.concat(theLetter.letter+" ");
		}else{
			myString = myString.concat("_ ");
		}
	}
	this.$el.html(this.template({word:myString}));
	$("#the-word").append(this.$el);
	return this;
},

});

