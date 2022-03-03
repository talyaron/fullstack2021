let gameBoard = {
    // boardMatrix:[],
    gameInfo: {
        isOn: false,
        revealedCount: 0,
        MarkedCount: 0,
        secsPassed: 0,
    },
    buildBoard(DifLevel) {
        let boardSize;
        let mineCount;
        if (DifLevel == "beginner") {
            boardSize = 4;
            mineCount = 4;
        }
        //create the size of the board
        let boardMatrix = new Array(boardSize)
        for (let i = 0; i < boardMatrix.length; i++) {
            boardMatrix[i] = new Array(boardSize);
        }
        //randomize
        let x = Math.random() * boardSize * boardSize;
        let placeMine = false;
        let test = 0;
        //populate each cell 
        for (let i = 0; i < boardMatrix.length; i++) {

            for (let j = 0; j < boardMatrix[i].length; j++) {
                if((Math.random()*boardSize*boardSize/mineCount)<1 || (i == 3 && j <= mineCount)){ //adds the mines
                    placeMine = true;
                    mineCount--;
                    test++;
                }
                else placeMine = false;
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
}

console.log(gameBoard.buildBoard("beginner"));