define(['input', 'output', 'settings', 'engine', 'board', 'gameLogic'], function(input, output, settings, engine, board, gameLogic) {
    return function() {
        var self = this;

        self.input = new input();
        self.output = new output();

        self.init = function() {
            self.output.showSettings();
            self.initEvents();
        };
        self.initEvents = function() {
            self.input.clearSettings(self.output.clearSettings);
            self.input.startGame(self.startGame);
        };
        self.createEngine = function(settings) {
            self.settings = settings;
            self.board = new board(self.settings, self.input, self.output);
            self.gameLogic = new gameLogic();
            self.engine = new engine(self.output, self.board, self.gameLogic);
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
        self.validateSettings = function(numberOfPlayers, boardSize) {
            return !isNaN(parseInt(numberOfPlayers)) && !isNaN(parseInt(boardSize));
        }
    };
});