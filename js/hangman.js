// Creates hangman game
window.hangman = window.hangman || {};


$(function () {
	// Create container to start game
	'use strict';
	new window.hangman.ContainerView();

	$("#enter-letter").keyup(function(event){
    	if(event.keyCode == 13){
      		$("#enter-button").click();
   		}
	});
});

