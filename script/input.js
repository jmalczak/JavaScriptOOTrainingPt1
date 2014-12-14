define(['jquery'], function($) {
    return function() {
        var self = this;
        self.clearSettings = function(callback) {
            $(document).ready(function() {
                $("#clear").click(function(e) {
                    e.preventDefault();
                    callback();
                });
            });
        };
        self.startGame = function(callback) {
            $(document).ready(function() {
                $("#startGame").click(function(e) {
                    e.preventDefault();
                    callback($("#boardSize").val(), $("#numberOfPlayers").val());
                });
            });
        };
        self.readMove = function(onCompleted) {
            $("td").click(function() {
                var x = parseInt($(this).attr("x"));
                var y = parseInt($(this).attr("y"));
                if (x != undefined && y != undefined) {
                    onCompleted(x, y);
                }
            })
        };
    };
});