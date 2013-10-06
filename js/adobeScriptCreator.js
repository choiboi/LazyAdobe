// This js will handle creating the PhotoShop script code.
var ScriptGenerator = function() {
	this.script = "";
	this.standardDocVarName = "doc";
    this.optionsName = "opts";

    this.checkFolderExistsCode = "";

    this.setupJPEGOptions = function() {
        var code = "var opts = new JPEGSaveOptions();\n" + "opts.embedColorProfile = true;\n";
        code += "opts.formatOptions = FormatOptions.STANDARDBASELINE;\n" + "opts.matte = MatteType.NONE;\n";
        code += "opts.quality = 10;\n";
        return code;
    };

    this.setupPNGOptions = function() {
        var code = "var opts = new PNGSaveOptions();\n" + "opts.interlaced = true;\n";
        return code;
    };

    this.setupPSDOptions = function() {
        var code = "var opts= new PhotoshopSaveOptions();\n" + "opts.alphaChannels = true;\n";
        code += "opts.annotations = true;\n" + "opts.embedColorProfile = true;\n";
        code += "opts.layers = true;\n" + "opts.spotColors = true;\n";
        return code;
    };
};

ScriptGenerator.prototype.openFile = function() {
	this.script = "if (documents.length == 0) {\n alert('There are no documents open.');\n} else {\n var "
			+ this.standardDocVarName + " = activeDocument;\n}\n" + this.script;
};

ScriptGenerator.prototype.saveFile = function(saveAs, newFilename, newFolder, saveOptions) {
    if (saveAs) {
        this.script += "var p = " + this.standardDocVarName + ".path;\n";
        this.script += "var myFolder = newFolder(p + " + newFolder + ");\n" +
                            "myFolder.create();\n";
        this.script += this.setupJPEGOptions();
        var newPath = "/" + newFolder + "/" + newFilename;
        this.script += this.standardDocVarName + ".saveAs(" + newPath + ", " + this.optionsName + ", true, Extension.LOWERCASE);\n";
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