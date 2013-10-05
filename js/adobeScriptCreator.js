// This js will handle creating the PhotoShop script code.
var ScriptGenerator = function() {
	this.script = "";

	this.standardDocVarName = "doc";
};

ScriptGenerator.prototype.openFile = function(willOpen, filePath) {

	if (willOpen) {
		this.script += "var" + this.standardDocVarName + " = open(File(" + filePath + "));"
	} else {
		this.script += "if (documents.length == 0) {\n alert('There are no documents open.');\n} else {\n var "
				 + this.standardDocVarName + " = activeDocument;\n}"
	}
};

ScriptGenerator.prototype.getScriptBlob = function() {
	alert(this.script);
	var s = this.script;
	this.script = "";
	return s;
};

window.scriptCreator = new ScriptGenerator();