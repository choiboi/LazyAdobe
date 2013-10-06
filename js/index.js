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

$('#loadFileButton').on('click', function() {
    alert('load file button');
    $('#loadFileModal').modal('hide')
});

$('#saveButton').on('click', function() {
    window.task.saveF();
    window.scriptCreator.saveFile(false, null, null, null);
});

$('#previewScriptButton').on('click', function() {
    $('#scriptwrapper').fadeToggle(100);
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});
$('#saveAsButton').on('click', function() {
    alert('save as button');
    $('#saveAsModal').modal('hide')
    window.task.saveAsF();
    window.scriptCreator.saveFile(true, "test.jpg", "newFolder", setupJPEGOptions);
});

// Saves to file and allows users to save it onto their local machine.
$('#downloadScriptButton').on('click', function() {
    if (window.task.isTaskEmpty()) {
        // Add appropriate model to display info.
        alert("NO TASKS!!");
    } else {
        if (!window.task.isFirstTaskOpenFile()) {
            window.scriptCreator.openFile();
        }
    	var blob =  new Blob([window.scriptCreator.getScript()], {type: 'text/plain'});;
    	saveAs(blob, "document.jsx");
    }
});