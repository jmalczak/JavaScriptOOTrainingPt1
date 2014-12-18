define(['gameLogic', 'cell'], function(gameLogic, cell) {
    describe('game logic', function() {
        var logic = new gameLogic();
        it('should find winner in one row', function() {
            var cells = [
                [new cell('a'), new cell('a')],
                [new cell('v'), new cell('d')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('a');
        });
        it('should find winner in one column', function() {
            var cells = [
                [new cell('x'), new cell('v')],
                [new cell('x'), new cell()]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
        it('should find winner in diag 1', function() {
            var cells = [
                [new cell('x'), new cell('v')],
                [new cell('s'), new cell('x')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
        it('should find winner in diag 2', function() {
            var cells = [
                [new cell('s'), new cell('x')],
                [new cell('x'), new cell('z')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
    });
});