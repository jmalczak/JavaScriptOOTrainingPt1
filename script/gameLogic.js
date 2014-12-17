define([], function() {
    return function() {
        var self = this;
        self.checkWinner = function(cells) {
            console.log(cells);
            var size = cells.length;
            var rows = [];
            var cols = [];
            var diag1 = [];
            var diag2 = [];
            for (x = 0; x < size; x++) {
                for (y = 0; y < size; y++) {

                    var cell = cells[x][y];

                    if(cell.character == ""){
                        continue;
                    }

                    if (rows[x] == undefined || rows[x][cell.character] == undefined) {
                        var counter = {};
                        counter[cell.character] = 1;
                        rows[x] = counter;
                    } else {
                        rows[x][cell.character]++;
                    }
                    if (cols[y] == undefined || cols[y][cell.character] == undefined) {
                        var counter = {};
                        counter[cell.character] = 1;
                        cols[y] = counter;
                    } else {
                        cols[y][cell.character]++;
                    }
                    if (x == y) {

                        if (diag1[0] == undefined) {
                            var counter = {};
                            counter[cell.character] = 1;
                            diag1[0] = counter;
                        } else {
                            diag1[0][cell.character]++;
                        }
                        if (diag1[0][cell.character] == size) {
                            return cell.character;
                        }
                    }
                    if (x + y == size -1) {

                        if (diag2[0] == undefined) {
                            var counter = {};
                            counter[cell.character] = 1;
                            diag2[0] = counter;
                        } else {
                            diag2[0][cell.character]++;
                        }
                        if (diag2[0][cell.character] == size) {
                            return cell.character;
                        }
                    }
                    if (rows[x][cell.character] == size) {
                        return cell.character;
                    }
                    if (cols[y][cell.character] == size) {
                        return cell.character;
                    }
                }
            };

            return null;
        };
        self.checkWinnerInternal = function(cells, startFromX, startFromY, previousCount) {
            var height = cells.length;
            var width = cells[0].length;
            if (previousCount == width) {
                return true;
            } else if (startFromY >= height || startFromX >= width) {
                return false;
            } else {
                if (previousCount == undefined) {
                    previousCount = 1;
                } else if (cells[startFromX][startFromY].isSelected == true) {
                    previousCount++;
                }
                var right = self.checkWinnerInternal(cells, startFromX + 1, startFromY, previousCount);
                var down = self.checkWinnerInternal(cells, startFromX, startFromY + 1, previousCount);
                var cross = self.checkWinnerInternal(cells, startFromX + 1, startFromY + 1, previousCount);
                return right || down || cross;
            }
        };
    };
});