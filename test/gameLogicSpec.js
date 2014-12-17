define(['gameLogic', 'cell'], function(gameLogic, cell) {
    describe('game logic', function() {
        var logic = new gameLogic();
        it('should find winner in one row', function() {
            var cells = [
                [new cell(0, 0, 'a'), new cell(0, 1, 'a')],
                [new cell(1, 0, 'v'), new cell(1, 1, 'd')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('a');
        });
        it('should find winner in one column', function() {
            var cells = [
                [new cell(0, 0, 'x'), new cell(0, 1, 'v')],
                [new cell(1, 0, 'x'), new cell(1, 1, '')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
        it('should find winner in diag 1', function() {
            var cells = [
                [new cell(0, 0, 'x'), new cell(0, 1, 'v')],
                [new cell(1, 0, 's'), new cell(1, 1, 'x')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
        it('should find winner in diag 2', function() {
            var cells = [
                [new cell(0, 0, 's'), new cell(0, 1, 'x')],
                [new cell(1, 0, 'x'), new cell(1, 1, 'z')]
            ];
            var winner = logic.checkWinner(cells);
            winner.should.be.exactly('x');
        });
    });
});