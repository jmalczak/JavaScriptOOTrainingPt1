var Engine = function(board, gameLogic){
	var self = this;

	self.board = board;
	self.gameLogic = gameLogic;

	self.play = function(){
		console.log('Play');

		board.init();
		self.move();
	}

	self.move = function(){
		board.draw();
		board.nextMove(self.onCompleted);		
	}

	self.onCompleted = function(x, y){
		self.board.moveTo(x, y);
		board.draw();
		
		if(self.gameLogic.checkWinner(board.getCells())){
			alert("Winner");
		}
		else {
			self.move();
		}
	}
}