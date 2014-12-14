define([], function() {
    return function(boardSize, numberOfPlayers) {
        var self = this;
        self.boardSize = boardSize;
        self.numberOfPlayers = numberOfPlayers;
    };
});