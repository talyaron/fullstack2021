var gameBoard = {
    // boardMatrix:[],
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
        //randomize
        var x = Math.random() * boardSize * boardSize;
        var placeMine = false;
        var test = 0;
        //populate each cell 
        for (var i = 0; i < boardMatrix.length; i++) {
            for (var j = 0; j < boardMatrix[i].length; j++) {
                if ((Math.random() * boardSize * boardSize / mineCount) < 1 || (i == 3 && j <= mineCount)) { //adds the mines
                    placeMine = true;
                    mineCount--;
                    test++;
                }
                else
                    placeMine = false;
                boardMatrix[i][j] = {
                    minesAroundCount: 0,
                    isRevealed: false,
                    isMine: placeMine,
                    isMarked: false
                };
            }
        }
        console.log(test);
        return boardMatrix;
    }
};
console.log(gameBoard.buildBoard("beginner"));
