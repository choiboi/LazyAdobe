// Start here.x


var setupJPEGOptions = function() {
    var jpgOpts = new JPEGSaveOptions();
    jpgOpts.embedColorProfile = true;
    jpgOpts.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgOpts.matte = MatteType.NONE;
    jpgOpts.quality = jpegQuality; 

    return jpgOpts;
};

var setupPNGOptions = function() {
    var pngOpts = new PNGSaveOptions();
    pngOpts.interlaced = true;

    return pngOpts;
};

var setupPSOptions = function() {
    var psOpts = new PhotoshopSaveOptions();
    psOpts.alphaChannels = true;
    psOpts.annotations = true;
    psOpts.embedColorProfile = true;
    psOpts.layers = true;
    psOpts.spotColors = true;

    return psOpts;
}

// Saves to file and allows users to save it onto their local machine.
$('#writeToFile').on('click', function() {
	window.scriptCreator.openFile(false, null);
	window.scriptCreator.resizeImage(100, 300);
	window.scriptCreator.resizeCanvas(500, 500);
    window.scriptCreator.saveFile(true, "~/Desktop/test.jpg");
	var blob =  new Blob([window.scriptCreator.getScript()], {type: 'text/plain'});;
	saveAs(blob, "document.jsx");
});