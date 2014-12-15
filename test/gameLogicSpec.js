define(['gameLogic', 'cell'], function(gameLogic, cell) {
    describe('game logic', function() {

        var logic = new gameLogic();

        it('should find winner in one row', function() {

            var cells = [[new cell(0, 0, 'a'), new cell(0, 1, 'a')], [new cell(1, 0, 'v'), new cell(1, 1, 'd')]];
            var winner = logic.checkWinner(cells);
            
            winner.should.be.false;
        });
    });
});