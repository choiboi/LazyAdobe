// Start here.x


// Saves to file and allows users to save it onto their local machine.
$('#writeToFile').on('click', function() {
	var blob = new Blob([], {type: 'text/plain'});
	saveAs(blob, "document.jsx");
});
