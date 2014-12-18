define([], function(){
	return new function(){

		this.createTwoDimensionalMatrix = function(x, y, defaultValue) {
			var matrix = [];

			for(i = 0; i < y; i++){
				matrix[i] = [];
				for(j = 0; j < x; j++){
					matrix[i][j] = defaultValue;
				}
			}

			return matrix;
		};
	};
});