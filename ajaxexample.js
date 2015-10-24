$(document).ready(function() {


	// var xhr = new XMLHttpRequest ();
	// console.log(xhr);

	// xhr.onload = function() {
	// 	console.log(xhr.status);

	// 	if (xhr.status === 200) {
	// 		console.log(JSON.parse(xhr.responseText));
	// 		console.log(JSON.parse(xhr.responseText).data.children[4].data.preview.images[0].source.url);
	// 	}


	// }

	// xhr.open('GET','https://www.reddit.com/r/aww.json' , true);
	// xhr.send(null);


	$.ajax({
		url: 'https://www.reddit.com/r/aww.json',
		method: 'GET',
		success: function(data){
			console.log(data);
			debugger
		}
	})

});
