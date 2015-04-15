//Ryan Backa
//MIU 1504
//About Me 

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

//creation of title 
var titleView = Ti.UI.createView({
	top: 20,
	height: 40,
	backgroundColor:"#d8d8d8"
});

var titleText = Ti.UI.createLabel({
	text: "About Me",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	color: "#fff",
	center: titleView
});

var loadFunction = require("function");

titleView.add(titleText);
mainWin.add(titleView);
mainWin.open;