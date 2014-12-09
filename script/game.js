var Game = new function(){
	var self = this;

	self.init = function(){
		self.initEvents();
        var settings = new Settings(3, 2);
        var output = new HtmlOutput();
        var input = new HtmlInput();
        var board = new Board(settings, input, output);
        var gameLogic = new GameLogic();
        var engine = new Engine(board, gameLogic);
        engine.play();
	};

	self.initEvents = function(){
		$(document).ready(function(){
			$("#clear").click(function(e){
				e.preventDefault();

				$("#numberOfPlayers").val("");
				$("#boardSize").val("");
			});

			$("#startGame").click(function(e){
				e.preventDefault();
				
			})
		});
	};
}();