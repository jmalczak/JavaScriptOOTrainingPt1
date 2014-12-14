define(['output', 'gameLogic'], function(output, gameLogic) {
    return function(board, players) {
        var self = this;
        self.board = board;
        self.players = players;
        self.output = new output();
        self.gameLogic = new gameLogic();

        self.currentPlayer = 0;
        self.numberOfPlayers = players.length;

        self.play = function() {
            board.init();
            self.move();
        }
        self.move = function() {
            board.draw();
            board.nextMove(self.onCompleted);
        }
        self.onCompleted = function(x, y) {            
            self.board.moveTo(x, y, self.players[self.currentPlayer % self.numberOfPlayers]);
            self.currentPlayer++;
            
            board.draw();
            if (self.gameLogic.checkWinner(board.getCells())) {
                alert("Winner");
            } else {
                self.move();
            }
        }
    };
});