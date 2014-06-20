// Hangman view

window.hangman = window.hangman || {};

window.hangman.ManView = Backbone.View.extend({

tagName: 'b',

template: _.template($('#wrong-letter-template').html()),

events: {

},

initialize: function(){
	this.listenTo(this.collection,'change',this.render);
	this.listenTo(this.collection,'add',this.render);
	this.render();
},

show: function(i){
if(i==0){
	$('#img1').hide();
	$('#img2').hide();
	$('#img3').hide();
	$('#img4').hide();
	$('#img5').hide();
	$('#img6').hide();
	$('#img7').hide();
	$('#img8').hide();
	$('#img9').hide();
	$('#img10').hide();
	$('#img0').show();
}else if(i==1){
	$('#img0').hide();
	$('#img1').show();	
}else if(i==2){
	$('#img1').hide();
	$('#img2').show();	
}else if(i==3){
	$('#img2').hide();
	$('#img3').show();	
}else if(i==4){
	$('#img3').hide();
	$('#img4').show();	
}else if(i==5){
	$('#img4').hide();
	$('#img5').show();	
}else if(i==6){
	$('#img5').hide();
	$('#img6').show();	
}else if(i==7){
	$('#img6').hide();
	$('#img7').show();
}else if(i==8){
	$('#img7').hide();
	$('#img8').show();
}else if(i==9){
	$('#img8').hide();
	$('#img9').show();
}else{
	$('#img9').hide();
	$('#img10').show();
}
},



render: function(){
	var coll = this.collection.toJSON();
	var i = this.collection.length;
	this.show(i);
	return this;
},

});
