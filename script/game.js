var Game = new function(){
    var self = this;

    self.init = function(){
        self.input = new HtmlInput();
        self.output = new HtmlOutput();
        self.output.showSettings();

        self.initEvents();
    };

    self.initEvents = function(){
        self.input.clearSettings(self.output.clearSettings);
        self.input.startGame(self.startGame);
    };

    self.createEngine = function(settings){
        self.settings = settings;
        self.board = new Board(self.settings, self.input, self.output);
        self.gameLogic = new GameLogic();
        self.engine = new Engine(self.output, self.board, self.gameLogic);
    };

    self.startGame = function(boardSize, numberOfPlayers){
        if(self.validateSettings(boardSize, numberOfPlayers)){
            console.log(boardSize);
            self.settings = new Settings(parseInt(boardSize), parseInt(numberOfPlayers));

            self.output.hideSettings();
            self.output.showBoard();
            self.createEngine(self.settings);
            self.engine.play();
        }
    };

    self.validateSettings = function(numberOfPlayers, boardSize){
        return !isNaN(parseInt(numberOfPlayers)) && !isNaN(parseInt(boardSize));
    }
}();