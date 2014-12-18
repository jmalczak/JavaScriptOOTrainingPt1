define(['cell', 'input', 'output', 'utils'], function(cell, input, output, utils) {
    return function(settings) {
        var self = this;
        self.settings = settings;
        self.input = new input();
        self.output = new output();
        self.cells = utils.createTwoDimensionalMatrix(self.settings.boardSize, self.settings.boardSize, function() {
            return new cell();
        });
        console.log(self.cells);
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