$(document).ready(function() {


$('#gameboard').hide();



$("#letsplay").click(function() {
	// event.preventDefault();

 	$(".instructionBox").hide();
 	$('#gameboard').show();
});



	function createCards() {
  	var card = 1;
  	for (var i = 1; i <= 4; i++){
  		var $row = $('<div>')
  		$row.addClass('row'+i)
  		$('#gameboard').append($row);
  		for( var j = 1; j <= 4; j++){
  			var $card = $('<div>')
  			$card.addClass('card facedown').attr('id', 'card'+card)
  			card++;
  			$($card).appendTo('.row'+i)
  		}
  	}

	}


	function getAww(){
		$.ajax
		({
			url: 'https://www.reddit.com/r/aww.json',
			method: 'GET',
			success: function(data)
			{

				var cards = []
				var limit = 8 //8 pairs for 16 cards

				for(var i = 1; i<=limit;i++)
				{
					var url = data.data.children[i].data.url
					//if the url isn't formatted correctly or is a gif it is not a valid url
					if (url.substring(url.length - 4)!=='gifv' && 
							url.substring(0,12)==='http://i.img'){

						cards.push(data.data.children[i].data.url)
						cards.push(data.data.children[i].data.url)
					}
					else{//limit increase because on this iteration we didn't add a pair of cards
						limit++
					}
				}


				//the next block shuffles the cards index
				var currentIndex = cards.length
				var temp
				var rand
				while(0 !== currentIndex){
					rand = Math.floor(Math.random()*currentIndex);
					currentIndex--;

					temp = cards[currentIndex];
					cards[currentIndex] = cards[rand];
					cards[rand] = temp;
				}

				//this block add the images to the html cards
				var $htmlCards = $('.card')
				for (var x = 0; x < 17; x++){
					$($htmlCards[x]).html('<span class = "helper"></span><img src="'+cards[x]+'" id="i'+(x+1)+'">')
					$('#i'+x).hide()
				}


			}




		})
	}

	createCards()
	getAww()


	var clickHistory = [0]
	var matches = 0
	$('.card').on('click', function(){
		clickHistory.push($(this).children('img').attr('src'))
		//this shows the card after it is clicked then calls a function
		$(this).addClass('faceup').removeClass('facedown').children('img').show().delay(1200).queue(function(){
			///this function first checks if the last two clicks were matches. If so matches are added.
			///if they don't match the card is then flipped back
			///if there's 16 matches the board is hidded and congratulations are in order.
			if(clickHistory[clickHistory.length-1]===clickHistory[clickHistory.length-2]){
					matches++
					console.log(matches)
			}
			else if(clickHistory[clickHistory.length-1]!==clickHistory[clickHistory.length-2]){
				$(this).hide().parent('div').removeClass('faceup').addClass('facedown')
				$(this).dequeue();
			}
			if(matches===16){
				$('#gameboard').hide()
				$('body').append('<h5>YOU CAUGHT THEM ALL!</h5>')
				setInterval(strobe, 200)
			}
		})
	});

function strobe() {
				var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
            if(red>50&&green>50&&blue>50) {
                $('body').css('color', 'black');
            } else {
                $('body').css('color', 'white');
            }
        var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
        $('body').css('background-color', randomRGBA);
}




});
