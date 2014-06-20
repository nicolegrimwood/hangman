// word randomly selected

window.hangman = window.hangman || {};

window.hangman.Word = Backbone.Collection.extend({
	model: hangman.Letter, 

	done: function() {
		var val = this.filter(function(letter){
			return !letter.get('filledIn');
		}); 
		if(val.length == 0){
			return true;
		}else{
			return false;
		}
	},


	initialize : function(){
		var words = "duty bins props slash sharpener contrast pupil sevens monday qualifications member projects pencil fist computers tear lumber flags threaders make schedules thimble pulls choices quarts lights subordinate manifests capability behaviors professionals hygiene collection fifths delight weathers multitasks upside satellite chain piece economy splices differences provisions allotments clicks contraband grass bean rheostats clock years hoops exceptions purge varieties confinement counts bed distances thermometer majority interviewers destruction seventies inception stool";
		var array = words.split( " " );
    	var random = (Math.floor(Math.random() * array.length));
    	this.myWord = array[random];
    	for(i=0;i<this.myWord.length;i++){
    		this.add({letter : this.myWord.charAt(i)})
    	}
    	console.log(this.myWord);
	},

	compareLetter: function(myLetter){
		var inColl = false;
		//iterate through letters in collection
		//to see if letter is there
		for(i=0;i<this.length;i++){
			if(this.at(i).get('letter')==myLetter){
				this.at(i).set({'filledIn': true},{silent: true});
				inColl = true;
			}
		}
		this.trigger('change');
		return inColl;
	},

	newWord: function(){
		this.reset();
		var words = "duty bins props slash sharpener contrast pupil sevens monday qualifications member projects pencil fist computers";
		var array = words.split( " " );
    	var random = (Math.floor(Math.random() * array.length));
    	this.myWord = array[random];
    	console.log(this.myWord);
    	for(i=0;i<this.myWord.length;i++){
    		this.add({letter : this.myWord.charAt(i)},{silent:true})
    	}
    	this.trigger('change');
	},

	death: function(){
			alert("You Lost :(. The word was '"+this.myWord+"'.");
	}


});