define(['input', 'output', 'settings', 'player', 'engine', 'board', 'gameLogic'], function(input, output, settings, player, engine, board, gameLogic) {
    return function() {
        var self = this;
        self.input = new input();
        self.output = new output();
        self.playerCharacters = ['X', 'O', 'Y', 'Z', 'A', 'B', 'W', 'F', 'E'];
        self.init = function() {
            self.output.hideBoard();
            self.output.showSettings();
            self.initEvents();
        };
        self.initEvents = function() {
            self.input.clearSettings(self.output.clearSettings);
            self.input.startGame(self.startGame);
        };
        self.createEngine = function(settings) {
            self.settings = settings;
            self.engine = new engine(new board(self.settings), self.createPlayers(settings.numberOfPlayers), self.winnerCallback);
        };
        self.startGame = function(boardSize, numberOfPlayers) {
            if (self.validateSettings(boardSize, numberOfPlayers)) {
                self.settings = new settings(parseInt(boardSize), parseInt(numberOfPlayers));
                self.output.hideSettings();
                self.output.showBoard();
                self.createEngine(self.settings);
                self.engine.play();
            }
        };
        self.createPlayers = function(numberOfPlayers) {
            var players = []
            for (i = 0; i < numberOfPlayers; i++) {
                players.push(new player('empty name', self.playerCharacters[i]))
            }
            return players;
        };
        self.validateSettings = function(numberOfPlayers, boardSize) {
            return !isNaN(parseInt(numberOfPlayers)) && !isNaN(parseInt(boardSize));
        }
        self.winnerCallback = function(winner) {
            alert("Winner " + winner);
            if (confirm("Play again?")) {
                self.createEngine(self.settings);
                self.engine.play();
            }
            else{
                self.init();
            }
        };
    };
});