// Start here.x


// Saves to file and allows users to save it onto their local machine.
$('#writeToFile').on('click', function() {
	window.scriptCreator.openFile(false, null);
	window.scriptCreator.resizeImage(100, 300);
	window.scriptCreator.resizeCanvas(500, 500);
	var blob =  new Blob([window.scriptCreator.getScript()], {type: 'text/plain'});;
	saveAs(blob, "document.jsx");
});
