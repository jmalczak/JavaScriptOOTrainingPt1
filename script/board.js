var Board = function(settings, input, output){
	var self = this;

	self.settings = settings;
	self.input = input;
	self.output = output;
	self.cells = [];

	self.init = function(){

		for(size = 0; size < self.settings.boardSize; size++){
			self.cells[size] = new Array(self.settings.boardSize);
		}

		for(x = 0; x < self.settings.boardSize; x++){
			for(y = 0; y < self.settings.boardSize; y++){
				self.cells[y][x] = new Cell(x, y, false);
			}
		}
	};

	self.getCells = function(){
		return self.cells;
	};

	self.nextMove = function(onCompleted){
		input.readMove(onCompleted);
	};

	self.moveTo = function(x, y){
		self.cells[x][y].isSelected = true;
	}

	self.draw = function(){
		self.output.drawBoard(self.cells);
	}
}