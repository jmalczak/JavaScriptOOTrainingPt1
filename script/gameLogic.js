var GameLogic = function(){
    var self = this;

    self.checkWinner = function(cells){

        var height = cells.length;
        var width = cells[0].length;        

        for(x = 0; x < width; x++){
            for(y = 0; y < height; y++){
                if(cells[x][y].isSelected){
                    if(self.checkWinnerInternal(cells, x, y)){
                        return true;
                    }
                }
            }
        };

        return false;
    };

    self.checkWinnerInternal = function(cells, startFromX, startFromY, previousCount){
        var height = cells.length;
        var width = cells[0].length;        

        console.log("start " + startFromX);
        console.log("start Y " + startFromY);
        console.log("previous " +  previousCount);
        
        if (previousCount == width) {
            return true;
        }
        else if(startFromY >= height || startFromX >= width){
            return false;
        }
        else {
            if(previousCount == undefined) {
                previousCount = 1;
            }
            else if(cells[startFromX][startFromY].isSelected == true){
                previousCount++;
            }

            var right = self.checkWinnerInternal(cells, startFromX + 1, startFromY, previousCount);
            var down = self.checkWinnerInternal(cells, startFromX, startFromY + 1, previousCount);
            var cross = self.checkWinnerInternal(cells, startFromX + 1, startFromY + 1, previousCount);

            return right || down || cross;
        }
    };
}