var table = function(){
	var qstnWin = Ti.UI.createWindow({
		backgroundColor:"#fff",
		scrollable: true
	});

	var loadFile = require("JSON");
	
	var table = Ti.UI.createTableView({
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		scrollable:true
	});
	
	var qstnHeader = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var qstnHeadText =Ti.UI.createLabel({
		text: loadFile.data.about.qstnHeadTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	qstnHeader.add(qstnHeadText);
	
	var qstnFooter = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var qstnFootText =Ti.UI.createLabel({
		text: loadFile.data.about.qstnFootTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	qstnFooter.add(qstnFootText);
	
	var ansHeader = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var ansHeadText =Ti.UI.createLabel({
		text: loadFile.data.about.ansHeadTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	ansHeader.add(ansHeadText);
	
	var ansFooter = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var ansFootText =Ti.UI.createLabel({
		text: loadFile.data.about.ansFootTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	ansFooter.add(ansFootText);
	
	var qstnSection = Ti.UI.createTableViewSection({
		headerTitle:qstnHeader,
		footerTitle:qstnFooter
	});
	
	var ansSection = Ti.UI.createTableViewSection({
		headerTitle:ansHeader,
		footerTitle:ansFooter
	});
	
	var aboutSections = [qstnSection, ansSection];
	
	//creation of rows in tabe 
	for(var i=0, j=loadFile.data.about.qstnAns.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadFile.data.about.qstnAns[i].qstn,
			hasChild:false
		});
		var row2 = Ti.UI.createTableViewRow({
			title: loadFile.data.about.qstnAns[i].ansr,
			hasChild:false
		});
	qstnSection.add(row);
	ansSection.add(row2);
	};
  
	//creation of the close button to go back to the main window
	
	var closeButton = Ti.UI.createLabel({
		text: "< Back",
		backgroundColor:"#d8d8d8",
		color:"#fff",
		height:30,
		font: {fontSize: 14, fontFamily: "Arial"},
		width:"100%",
		bottom:0,
		textAlign:"center"
	});
	
	var closeWindow = function(){
		qstnWin.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	table.setData(aboutSections);
	
	qstnWin.add(table,closeButton);
	qstnWin.open();
};

exports.table = table;