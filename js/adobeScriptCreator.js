// This js will handle creating the PhotoShop script code.
var ScriptGenerator = function() {
	this.script = "";
	this.standardDocVarName = "doc";
    this.jpgOptionsName = "jpgOpts";

    this.checkFolderExistsCode = "";

    this.setupJPEGOptions = function() {
        var code = "var jpgOpts = new JPEGSaveOptions();\n" + "jpgOpts.embedColorProfile = true;\n";
        code += "jpgOpts.formatOptions = FormatOptions.STANDARDBASELINE;\n" + "jpgOpts.matte = MatteType.NONE;\n";
        code += "jpgOpts.quality = 10;\n";
        return code;
    };
};

ScriptGenerator.prototype.openFile = function(willOpen, filePath) {
	if (willOpen) {
		this.script += "var" + this.standardDocVarName + " = open(File(" + filePath + "));\n"
	} else {
		this.script = "if (documents.length == 0) {\n alert('There are no documents open.');\n} else {\n var "
				 + this.standardDocVarName + " = activeDocument;\n}\n" + this.script;
	}
};

ScriptGenerator.prototype.saveFile = function(saveAs, newFilename, newFolder, saveOptions) {
    if (saveAs) {
        this.script += "var p = " + this.standardDocVarName + ".path;\n";
        this.script += "var myFolder = newFolder(p + " + newFolder + ");\n" +
                            "myFolder.create();\n";
        this.script += this.setupJPEGOptions();
        var newPath = "/" + newFolder + "/" + newFilename;
        this.script += this.standardDocVarName + ".saveAs(" + newPath + ", " + this.jpgOptionsName + ", true, Extension.LOWERCASE);\n";
    } else {
        this.script += this.standardDocVarName + ".save();\n";
    }
    alert(this.script);
};

ScriptGenerator.prototype.resizeImage = function(width, height) {
	this.script += this.standardDocVarName + ".resizeImage(" + width + ", " + height + ");\n";
};

ScriptGenerator.prototype.resizeCanvas = function(width, height) {
	this.script += this.standardDocVarName + ".resizeCanvas(" + width + ", " + height + ");\n";
};

ScriptGenerator.prototype.hideLayer = function(layer) {

};

ScriptGenerator.prototype.showLayer = function(layer) {

};

ScriptGenerator.prototype.getScript = function() {
    alert(this.script);
	var s = this.script;
	this.script = "";
	return s;
};

window.scriptCreator = new ScriptGenerator();