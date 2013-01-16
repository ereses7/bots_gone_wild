function Game(id) {
    this.gameData = gameData;
    
    var map = this.gameData.map,
        height = map.length,
        width = map[0].length,
        self = this;
    
    var grid = new Rss.Grid(width, height, 10, true, 'gray', document.getElementById('game_section'));
    
    var i, j;
    
    for (i=0; i<width; i++) {
        for (j=0; j<height; j++) {
            if (map[j][i] == 1)
                grid.fillSquare(i, j, 'black');
        }
    }
    
    for (i=0; i<this.gameData.player1.length; i++) {
        grid.fillSquare(this.gameData.player1[i][0], this.gameData.player1[i][1], 'green');
    }
    
    for (i=0; i<this.gameData.player2.length; i++) {
        grid.fillSquare(this.gameData.player2[i][0], this.gameData.player2[i][1], 'red');
    }
    
    i = 0;
    
    var intervalId = null;
    
    var play = function() {
        var move = null, color;
        
        move = self.gameData.moveHistory[i];

        if (move.what === 'move') {
            color = (i % 10 >= 5) ? 'red' : 'green';
            grid.clearSquare(move.who[0], move.who[1]);
            grid.fillSquare(move.who[0] + move.where[0], move.who[1] + move.where[1], color);
        }
        
        i++;
        
        if (i == self.gameData.moveHistory.length) {
            clearInterval(intervalId);
        }
    }
    
    intervalId = setInterval(play, 500);
}