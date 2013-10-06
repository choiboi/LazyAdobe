// Start here.
// var TaskList = function() {
//     this.tasks = new Array();

//     this.openfile = "OPEN_FILE";
//     this.save = "SAVE";
//     this.saveAs = "SAVE_AS";
//     this.resize_image = "RESIZE_IMAGE";
//     this.resize_canvas = "RESIZE_CANVAS";
// };

// TaskList.prototype.openF = function() {
//     this.tasks.push(this.openFile);
// };

// TaskList.prototype.saveF = function() {
//     this.tasks.push(this.save);
// };

// TaskList.prototype.saveAsF = function() {
//     this.tasks.push(this.saveAs);
// };

// TaskList.prototype.isTaskEmpty = function() {
//     return this.tasks.length === 0;
// };

// TaskList.prototype.isFirstTaskOpenFile = function() {
//     return this.tasks[0] === this.openfile;
// };

// window.task = new TaskList();


$('#saveButton').on('click', function() {
    // window.task.saveF();
    // window.scriptCreator.saveFile(false, null, null, null);
    tempTask = new Object();
    tempTask.type = "save";
    TaskList.push(tempTask);
});

$('#previewScriptButton').on('click', function() {
    $('#scriptwrapper').fadeToggle(100);
    if($(this).hasClass('active')){
        // Closing.
        $(this).removeClass('active');
    } else {
        // Opening.
        $(this).addClass('active');
        // Generate Script.
        window.scriptCreator.openFile();
        for (var i = 0; i < TaskList.length; i++) {
            var temp = TaskList[i];
            if (temp.type === "save") {
                window.scriptCreator.saveFile(false, null, null, null);
            } else if (temp.type === "saveAs") {
                var code = "";
                if (temp.extension === "JPG") {
                    code = window.scriptCreator.setupJPEGOptions(temp.quality);
                } else if (temp.extension === "PNG") {
                    code = window.scriptCreator.setupPNGOptions(temp.interlaced);
                } else {
                    code = window.scriptCreator.setupPSDOptions();
                }
                window.scriptCreator.saveFile(true, temp.filename, temp.folder, code);
            } else if (temp.type === "resizeCanvas") {
                window.scriptCreator.resizeCanvas(temp.width, temp.height);
            } else if (temp.type === "resizeImage") {
                window.scriptCreator.resizeImage(temp.width, temp.height);
            } else if (temp.type === "hideLayer") {
                window.scriptCreator.hideLayer(temp.layerName);
            } else if (temp.type === "showLayer") {
                window.scriptCreator.showLayer(temp.layerName);
            }
        }

        var script = window.scriptCreator.getScript();
        alert(script);
    }
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