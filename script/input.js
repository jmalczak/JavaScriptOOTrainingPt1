var Input = function(){
    var self = this;

    self.readInput = function(){

    };;
};

var HtmlInput = function(){
    var self = this;

    self.readMove = function(onCompleted){

        $("td").click(function(){
            var x = parseInt($(this).attr("x"));
            var y = parseInt($(this).attr("y"));
            
            if(x != undefined && y != undefined){
                onCompleted(x, y);
            }
        })
    };
};