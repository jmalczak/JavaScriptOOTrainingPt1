define(['jquery'], function($) {
    return function() {
        var self = this;
        self.showBoard = function() {
            $("#board").show();
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
            height = cells.length;
            width = cells[0].length;
            for (x = 0; x < width; x++) {
                $("#board table").append("<tr x='" + x + "'></tr>")
                for (y = 0; y < height; y++) {
                    self.drawCell(cells[x][y])
                }
            }
        };
        self.drawCell = function(cell) {        
            $("#board table tr[X='" + cell.y + "']").append("<td x='" + x + "' y='" + y + "' >" + cell.character + "</td>");
        };
    };
});