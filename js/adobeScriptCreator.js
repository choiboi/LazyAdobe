// This js will handle creating the PhotoShop script code.
var ScriptGenerator = function() {
	this.script = "";
	this.standardDocVarName = "doc";
    this.optionsName = "opts";

    this.checkFolderExistsCode = "";
};

ScriptGenerator.prototype.openFile = function() {
	this.script = "if (documents.length == 0) {\n alert('There are no documents open.');\n} else {\n var "
			+ this.standardDocVarName + " = activeDocument;\n}\n" + this.script;
};

ScriptGenerator.prototype.saveFile = function(saveAs, newFilename, newFolder, saveOptions) {
    if (saveAs) {
        this.script += "var p = " + this.standardDocVarName + ".path;\n";
        this.script += "var myFolder = new Folder(p + '/" + newFolder + "');\n" +
                            "myFolder.create();\n";
        this.script += saveOptions;
        var newPath = "/" + newFolder + "/" + newFilename;
        this.script += this.standardDocVarName + ".saveAs(p + '" + newPath + "', " + this.optionsName + ", true, Extension.LOWERCASE);\n";
    } else {
        this.script += this.standardDocVarName + ".save();\n";
    }
};

ScriptGenerator.prototype.setupJPEGOptions = function(quality) {
    var code = "var opts = new JPEGSaveOptions();\n" + "opts.embedColorProfile = true;\n";
    code += "opts.formatOptions = FormatOptions.STANDARDBASELINE;\n" + "opts.matte = MatteType.NONE;\n";
    code += "opts.quality = " + quality + ";\n";
    return code;
};

ScriptGenerator.prototype.setupPNGOptions = function(interlaced) {
    var code = "var opts = new PNGSaveOptions();\n" + "opts.interlaced = " + interlaced + ";\n";
    return code;
};

ScriptGenerator.prototype.setupPSDOptions = function() {
    var code = "var opts= new PhotoshopSaveOptions();\n" + "opts.alphaChannels = true;\n";
    code += "opts.annotations = true;\n" + "opts.embedColorProfile = true;\n";
    code += "opts.layers = true;\n" + "opts.spotColors = true;\n";
    return code;
};

ScriptGenerator.prototype.resizeImage = function(width, height) {
	this.script += this.standardDocVarName + ".resizeImage(" + width + ", " + height + ");\n";
};

ScriptGenerator.prototype.resizeCanvas = function(width, height) {
	this.script += this.standardDocVarName + ".resizeCanvas(" + width + ", " + height + ");\n";
};

ScriptGenerator.prototype.hideLayer = function(layerName) {
    this.script += "var l = " + this.standardDocVarName + ".artLayers.getByName('" + layerName + "');\n";
    this.script += "l.visible = false;\n";
};

ScriptGenerator.prototype.showLayer = function(layerName) {
    this.script += "var l = " + this.standardDocVarName + ".artLayers.getByName('" + layerName + "');\n";
    this.script += "l.visible = true;\n";
};

ScriptGenerator.prototype.getScript = function() {
	return this.script;
};

ScriptGenerator.prototype.getScriptAndRemove = function() {
    var s = this.script;
    this.script = "";
    return s;
}

ScriptGenerator.prototype.removeScript = function() {
    this.script = "";
}

window.scriptCreator = new ScriptGenerator();