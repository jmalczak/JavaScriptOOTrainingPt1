define(['consts', 'output', 'gameLogic'], function(consts, output, gameLogic) {
    return function(board, players, winnerCallback) {
        var self = this;
        self.board = board;
        self.players = players;
        self.winnerCallback = winnerCallback;
        self.output = new output();
        self.gameLogic = new gameLogic();

        self.currentPlayer = 0;
        self.numberOfPlayers = players.length;

        self.play = function() {
            self.move();
        };
        self.move = function() {
            board.draw();
            board.nextMove(self.onCompleted);
        };
        self.onCompleted = function(x, y) {
            self.board.moveTo(x, y, self.players[self.currentPlayer % self.numberOfPlayers]);
            self.currentPlayer++;
            
            board.draw();
            var winner = self.gameLogic.checkWinner(board.getCells());

            if (winner != consts.EMPTY_CELL) {
                self.winnerCallback(winner);
            } else {
                self.move();
            }
        };
    };
});