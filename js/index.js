// Start here.x


// Saves to file and allows users to save it onto their local machine.
$('#writeToFile').on('click', function() {
	window.scriptCreator.openFile(false, null);
	var blob =  new Blob([window.scriptCreator.getScriptBlob()], {type: 'text/plain'});;
	saveAs(blob, "document.jsx");
});
