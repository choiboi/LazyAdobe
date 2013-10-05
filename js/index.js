// Start here.

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

var onInitFs = function(fs) {

  	fs.root.getFile('log.txt', {create: true, exclusive: false}, function(fileEntry) {
	    fileEntry.createWriter(function(fileWriter) {
	      	var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

	      	fileWriter.write(blob);
  		});
  		alert("url:" + fileEntry.toURL());
  	}, errorHandler);
};

$('#writeToFile').on('click', function() {
	window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
});

var errorHandler = function(e) {
	var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  	alert('Error: ' + msg);

};