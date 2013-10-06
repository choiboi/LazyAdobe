// Start here.
var TaskList = function() {
    this.tasks = new Array();

    this.openfile = "OPEN_FILE";
    this.save = "SAVE";
    this.saveAs = "SAVE_AS";
};

TaskList.prototype.openF = function() {
    this.tasks.push(this.openFile);
};

TaskList.prototype.saveF = function() {
    this.tasks.push(this.save);
};

TaskList.prototype.saveAsF = function() {
    this.tasks.push(this.saveAs);
};

TaskList.prototype.isTaskEmpty = function() {
    return this.tasks.length === 0;
};

TaskList.prototype.isFirstTaskOpenFile = function() {
    return this.tasks[0] === this.openfile;
};

window.task = new TaskList();

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

$('#loadFileButton').on('click', function() {
    alert('load file button');
    $('#loadFileModal').modal('hide')
});

$('#saveButton').on('click', function() {
    window.task.saveF();
    window.scriptCreator.saveFile(false, null);
});

$('#saveAsButton').on('click', function() {
    alert('save as button');
    $('#saveAsModal').modal('hide')
});

// Saves to file and allows users to save it onto their local machine.
$('#createScriptButton').on('click', function() {
    if (window.task.isTaskEmpty()) {
        // Add appropriate model to display info.
        alert("NO TASKS!!");
    } else {
        if (!window.task.isFirstTaskOpenFile()) {
            window.scriptCreator.openFile(false, null);
        }
    	var blob =  new Blob([window.scriptCreator.getScript()], {type: 'text/plain'});;
    	saveAs(blob, "document.jsx");
    }
});