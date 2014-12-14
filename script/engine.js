define([], function() {
    return function(output, board, gameLogic) {
        var self = this;
        self.output = output;
        self.board = board;
        self.gameLogic = gameLogic;
        self.play = function() {
            board.init();
            self.move();
        }
        self.move = function() {
            board.draw();
            board.nextMove(self.onCompleted);
        }
        self.onCompleted = function(x, y) {
            self.board.moveTo(x, y);
            board.draw();
            if (self.gameLogic.checkWinner(board.getCells())) {
                alert("Winner");
            } else {
                self.move();
            }
        }
    };
});