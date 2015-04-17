//Ryan Backa
//MIU 1504
//Info App

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f0f0"
});

var loadPage = require("album");

var titleView = Ti.UI.createView({
	top:0,
	height:50,
	backgroundColor: "#D3D3D3"
});

var titleText = Ti.UI.createLabel({
	text:"Welcome to XYZ",
	font: {fontSize: 18, fontFamily: "Arial" },
	textAlign: "center",
	bottom: 8
});

var albumView = Ti.UI.createView({
	borderRadius:5,
	borderWidth:1,
	borderColor:"#fff",
	backgroundColor: "#fff",
	left:30,
	right:30,
	top: titleView.top + titleView.height + 40,
	height:50
});

var albumText = Ti.UI.createLabel({
	text: "Choose Artist",
	color: "#007FFF",
	font: {fontSize: 18, fontStyle: "bold" , fontFamily: "Arial"},
	textAlign:"center"
});



albumView.add(albumText);
titleView.add(titleText);
mainWin.add(titleView, albumView);
mainWin.open();
