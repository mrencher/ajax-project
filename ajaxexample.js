$(document).ready(function() {

	$('#selectbox').change(function(){
      var val = $(this).val();
      $('.changedValue').html(val);      

	$.ajax({
		url: 'https://www.reddit.com/r/aww.json',
		method: 'GET',
		success: function(data){
			console.log(data);
		}
	})
});
