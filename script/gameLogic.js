define(['consts'], function(consts) {
    var scoreTable = function() {
        var self = this;
        self.scoreStore = {};
        this.addScore = function(key) {
            if (self.scoreStore[key] == undefined) {
                self.scoreStore[key] = 1;
            } else {
                self.scoreStore[key]++;
            }
        };
        this.getScore = function(cell, x, y, size) {
            var rowKey = "row" + x + cell.character;
            var colKey = "col" + y + cell.character;
            var diag1key = "diag1" + cell.character;
            var diag2key = "diag2" + cell.character;

            self.addScore(rowKey);
            self.addScore(colKey);
            if (x == y) {
                self.addScore(diag1key);
            }
            if (x + y == size - 1) {
                self.addScore(diag2key);
            }
            if (self.scoreStore[rowKey] == size || self.scoreStore[colKey] == size || self.scoreStore[diag1key] == size || self.scoreStore[diag2key] == size) {
                return cell.character;
            };
            return consts.EMPTY_CELL;
        };
    };
    return function() {
        var self = this;
        self.checkWinner = function(cells) {
            var score = new scoreTable();
            var size = cells.length;
            for (x = 0; x < size; x++) {
                for (y = 0; y < size; y++) {
                    var cell = cells[x][y];

                    if (cell.character == consts.EMPTY_CELL) {
                        continue;
                    }
                    var winner = score.getScore(cell, x, y, size);

                    if (winner != consts.EMPTY_CELL) {
                        return winner;
                    }
                }
            };
            return consts.EMPTY_CELL;
        };
    };
});