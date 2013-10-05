// This js will handle creating the PhotoShop script code.
var ScriptGenerator = function() {
	this.script = "";

	this.standardDocVarName = "doc";
};

ScriptGenerator.prototype.openFile = function(willOpen, filePath) {
	if (willOpen) {
		this.script += "var" + this.standardDocVarName + " = open(File(" + filePath + "));\n"
	} else {
		this.script = "if (documents.length == 0) {\n alert('There are no documents open.');\n} else {\n var "
				 + this.standardDocVarName + " = activeDocument;\n}\n" + this.script;
	}
};

ScriptGenerator.prototype.saveFile = function(newFilename, filepath, saveOptions) {
    if (newFilename) {
        this.script += this.standardDocVarName + ".saveAs(File('" + filepath + "'));\n";
    } else {
        this.script += this.standardDocVarName + ".save();\n";
    }
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