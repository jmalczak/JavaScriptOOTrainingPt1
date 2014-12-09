var ConsoleOutput = function(){
	var self = this;

	self.clearBoard = function(){

	};

	self.drawBoard = function(cells){
		self.clearBoard();

		for(i = 0; i < cells.length; i++){
			self.drawCell(cells[i]);
		}
	};

	self.drawCell = function(cell){
		console.log("x:" + cell.x + " y:" + cell.y);
	};
}

var HtmlOutput = function(){
	var self = this;

	self.clearBoard = function(){
		$("#board").html("<table class='board center'></table>");
	};

	self.drawBoard = function(cells){
		self.clearBoard();

		height = cells.length;
		width = cells[0].length;

		for(x = 0; x < width; x++){

			$("#board table").append("<tr x='" + x + "'></tr>")	

			for(y = 0; y < height; y++){
				self.drawCell(cells[x][y])	
			}
		}	
	};

	self.drawCell = function(cell){ 
		var style = cell.isSelected ? "selected" : "notSelected";
		var selectedValue = cell.isSelected ? "X" : "";

		$("#board table tr[X='" + cell.y + "']").append("<td class=" + style + " x='" + x + "' y='" + y + "' >" + selectedValue + "</td>");
	};
};