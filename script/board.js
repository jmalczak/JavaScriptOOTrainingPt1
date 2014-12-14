define(['cell', 'input', 'output'], function(cell, input, output) {
    return function(settings) {

        var self = this;
        self.settings = settings;
        self.input = new input();
        self.output = new output();
        self.cells = [];

        self.init = function() {
            for (size = 0; size < self.settings.boardSize; size++) {
                self.cells[size] = new Array(self.settings.boardSize);
            }
            for (x = 0; x < self.settings.boardSize; x++) {
                for (y = 0; y < self.settings.boardSize; y++) {
                    self.cells[y][x] = new cell(x, y, "");
                }
            }
        };
        self.getCells = function() {
            return self.cells;
        };
        self.nextMove = function(onCompleted) {
            self.input.readMove(onCompleted);
        };
        self.moveTo = function(x, y, player) {
            self.cells[x][y].character = player.character;
        }
        self.draw = function() {
            self.output.drawBoard(self.cells);
        }
    };
});