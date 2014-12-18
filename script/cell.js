define(['consts'], function(consts) {
    return function(character) {
        var self = this;

        if(character === undefined){
            self.character = consts.EMPTY_CELL;
        }else{
            self.character = character;
        }
    };
});