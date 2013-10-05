// Start here.

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

var onInitFs = function(fs) {

  	fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
	    fileEntry.createWriter(function(fileWriter) {
	      	var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

	      	fileWriter.write(blob);
  		});
  	}, errorHandler);
};

$('#writeToFile').on('click', function() {
	window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
});

var errorHandler = function(e) {
	alert("error" + e);
};