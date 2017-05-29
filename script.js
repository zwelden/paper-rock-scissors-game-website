var playerHand;
var compHand;
var hands = ['paper', 'rock', 'scissors'];
var result;
var handClasses = ['.comp-rock', '.comp-paper', '.comp-scissors', '.player-paper', '.player-rock', '.player-scissors']

var winDiv = '<div class="winner"><p>';
var endWinDiv = '</p></div>';

var bgColor;
var bodyBGColor;

function main() {
	$('input[type="submit"]').click(function(){
		/* check if game has been run and clear any game states */

		if ($('.winner')[0]) {
			$('.winner').remove();
			for (var i = 0; i < handClasses.length; i++) {
				$(handClasses[i]).hide();
			}

		}


		// get hand choices
		var choice = Math.floor(Math.random()*3);
		compHand = hands[choice];
		playerHand = $('#choose-prs').val();
		$('.comp-' + compHand).show();
		$('.player-' + playerHand).show();

		// check win conditions
		if (compHand === playerHand) {
			result = 'Tie';
		}
		else if ((compHand === 'paper' && playerHand === 'rock') || 
				 (compHand === 'rock' && playerHand === 'scissors') ||
				 (compHand === 'scissors' && playerHand === 'paper')) {
			result = 'Computer Wins';
		}
		else if ((playerHand === 'paper' && compHand === 'rock') || 
				 (playerHand === 'rock' && compHand === 'scissors') ||
				 (playerHand === 'scissors' && compHand === 'paper')) {
			result = 'You Won!';
		}
		else {
			result = 'Something went wrong';
		}

		// create winning message
		if (result === 'Tie') {
			bgColor = '#FF0';
			bodyBGColor = '#fff894'
		}
		else if (result === 'Computer Wins') {
			bgColor = '#F00';
			bodyBGColor = '#ff9382'
		}
		else if (result === 'You Won!') {
			bgColor = '#0F0';
			bodyBGColor = '#c2ffb3'
		}
		else {
			bgColor = 'Grey';
		}

		$('h1').after(winDiv + result + endWinDiv);
		$('.winner').css('background-color', bgColor);
		$('body').css('background-color', bodyBGColor);



	});
}

$(document).ready(main);