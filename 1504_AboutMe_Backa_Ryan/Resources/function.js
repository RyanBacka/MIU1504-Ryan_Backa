var table = function(){

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
		text: loadFile.data.about.qstnHead,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	qstnHeader.add(qstnHeadText);
	
	var qstnFooter = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var qstnFootText =Ti.UI.createLabel({
		text: loadFile.data.about.qstnFoot,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	qstnFooter.add(qsntFootText);
	
	var ansHeader = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var ansHeadText =Ti.UI.createLabel({
		text: loadFile.data.about.ansHead,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	ansHeader.add(ansHeadText);
	
	var ansFooter = Ti.UI.createView({
		height:50,
		backgroundColor: "#bdbdbd"
	});
	
	var ansFootText =Ti.UI.createLabel({
		text: loadFile.data.about.ansFoot,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	andFooter(ansFootText);
	
	var qstnSection = Ti.UI.createTableViewSection({
		headerTitle:qstnHeader,
		footerTitle:qstnFooter
	});
	
	var ansSection = Ti.UI.createTableViewSection({
		headerTitle:ansHeader,
		footerTitle:ansFooter
	});
	
	var aboutSections = [qstnSection, ansSection];
	
	//creation of rows in tabe plus events to each row
	for(var i=0, j=loadFile.data.about.qstnAns.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadFile.data.about.qstnAns[i].qstn,
			hasChild:true
		});
	qstnSection.add(row);

	for(var i=0, j=loadFile.data.about.qstnAns.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadFile.data.about.qstnAns[i].ans,
			hasChild:true
		});
	ansSection.add(row);
	
	table.setData(aboutSections);
	
	mainWin.add(table)
};
