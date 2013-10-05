// Start here.

$('#writeToFile').on('click', function() {
	var blob = new Blob(["if (documents.length == 0) { alert('There are no documents open.'); var flowerDoc = open(File('~/Desktop/test/test_image.png'))}"], {type: 'text/plain'});
	saveAs(blob, "document.jsx");
});
