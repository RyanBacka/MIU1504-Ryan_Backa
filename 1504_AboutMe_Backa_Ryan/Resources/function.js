var table = function(){

	var loadFile = require("JSON");
	
	var qstnView = Ti.UI.createView({
		top:20,
		left:10,
		right:10,
		height:50,
		backgroundColor:#E8E8E8,
		borderRadius: 5,
		borderWidth:1,
		borderColor:#000
	});
	
	var qstnText = Ti.UI.createLabel({
		
	});
	
	var ansView = Ti.UI.createView({
		top:qstnView.top + qstnView.height + 20,
		left:10,
		right:50,
		backgroundColor:#E8E8E8,
		borderRadius:5,
		borderWidth:1,
		borderColor:#000
	});
	
	var ansText = Ti.UI.createLabel({
		
	});
	
	qstnView.ad(qstnText);
	ansView.add(ansText);

};

exports.table = table;