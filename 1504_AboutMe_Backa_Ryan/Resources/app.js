//Ryan Backa
//MIU 1504
//About Me 

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	scrollable: true
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

var buttonView = Ti.UI.createView({
	top:titleView.top+titleView.height+40,
	height:25,
	backgroundColor:"#58db41"
});

var buttonText = Ti.UI.createLabel({
	text:"Click for Questions and Answers",
	textAlign:"center"
});

var fnctn = require("function");

buttonView.add(buttonText);
buttonView.addEventListener("click", fnctn.table);

titleView.add(titleText);
mainWin.add(titleView, buttonView);
mainWin.open();
