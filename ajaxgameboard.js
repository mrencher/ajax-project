$(document).ready(function() {


$('#gameboard').hide();



$("#letsplay").click(function() {
	// event.preventDefault();

 	$(".instructionBox").hide();
 	$('#gameboard').show();
  });

$('.card').click(function(){
	console.log('wow')
	this.addClass('faceup').removeClass('facedown')
})



});
