var Game = new function(){
    var self = this;

    self.init = function(){
        self.initEvents();

        self.readSettings(function(settings){
            self.hideSettings();
            self.createEngine(settings);
            self.engine.play();
        });
    };

    self.initEvents = function(){
        $(document).ready(function(){
            $("#clear").click(function(e){
                e.preventDefault();

                $("#numberOfPlayers").val("");
                $("#boardSize").val("");
            });
        });
    };

    self.createEngine = function(settings){
        self.settings = settings;
        self.output = new HtmlOutput();
        self.input = new HtmlInput();
        self.board = new Board(self.settings, self.input, self.output);
        self.gameLogic = new GameLogic();
        self.engine = new Engine(self.output, self.board, self.gameLogic);
    };

    self.readSettings = function(callback){
        $("#startGame").click(function(e){
            e.preventDefault();

            if(self.validateSettings()){
                callback(new Settings(parseInt($("#boardSize").val()), parseInt($("#numberOfPlayers").val())));
            }
        });
    };

    self.validateSettings = function(){
        return !isNaN(parseInt($("#numberOfPlayers").val())) && !isNaN(parseInt($("#boardSize").val()));
    }

    self.hideSettings = function(){
        $("#settings").hide();
    };
}();