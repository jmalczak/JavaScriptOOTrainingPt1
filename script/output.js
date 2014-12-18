define(['jquery'], function($) {
    return function() {
        var self = this;
        self.showBoard = function() {
            $("#board").show();
        };
        self.hideBoard = function() {
            $("#board").hide();
        };
        self.showSettings = function() {
            $("#settings").show();
        };
        self.hideSettings = function() {
            $("#settings").hide();
        };
        self.clearSettings = function() {
            $("#numberOfPlayers").val("");
            $("#boardSize").val("");
        };
        self.clearBoard = function() {
            $("#board").html("<table class='board center'></table>");
        };
        self.drawBoard = function(cells) {
            self.clearBoard();
            var size = cells.length;
            for (x = 0; x < size; x++) {
                $("#board table").append("<tr x='" + x + "'></tr>")
                for (y = 0; y < size; y++) {
                    self.drawCell(cells[x][y], x, y);
                }
            }
        };
        self.drawCell = function(cell, x, y) {
            console.log(cell);
            $("#board table tr[X='" + x + "']").append("<td x='" + x + "' y='" + y + "' >" + cell.character + "</td>");
        };
    };
});