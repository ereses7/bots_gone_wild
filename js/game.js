function Game(id) {
    this.gameData = gameData;
    
    var map = this.gameData.map,
        height = map.length,
        width = map[0].length;
    
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
    
    var play = function() {
        
    }
}