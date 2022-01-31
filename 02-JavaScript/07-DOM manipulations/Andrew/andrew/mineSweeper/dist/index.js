var gameBoard = {
    // boardMetrix:[],
    gameInfo: {
        isOn: false,
        revealedCount: 0,
        MarkedCount: 0,
        secsPassed: 0
    },
    buildBoard: function (DifLevel) {
        var boardSize;
        var mineCount;
        if (DifLevel == "beginner") {
            boardSize = 4;
            mineCount = 4;
        }
        //create the size of the board
        var boardMatrix = new Array(boardSize);
        for (var i = 0; i < boardMatrix.length; i++) {
            boardMatrix[i] = new Array(boardSize);
        }
        //randomise
        var x = Math.random() * boardSize * boardSize;
        //populate erach cell 
        for (var i = 0; i < boardMatrix.length; i++) {
            for (var j = 0; j < boardMatrix[i].length; j++) {
                boardMatrix[i][j] = {
                    minesAroundCount: 0,
                    isRevealed: false,
                    isMine: false,
                    isMarked: false
                };
            }
        }
        return boardMatrix;
    }
};
console.log(gameBoard.buildBoard("beginner"));
