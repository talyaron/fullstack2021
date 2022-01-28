let gameBoard = {
    // boardMetrix:[],
    gameInfo:{
        isOn: false,
        revealedCount: 0,
        MarkedCount: 0,
        secsPassed: 0,
    },
    buildBoard(DifLevel){
        let boardSize;
        let mineCount;
        if(DifLevel ==  "beginner"){
            boardSize = 4;
            mineCount = 4;
        }
        //create the size of the board
        let boardMatrix = new Array(boardSize)
        for(let i=0; i<boardMatrix.length; i++){
            boardMatrix[i] = new Array(boardSize);
        }
        //randomise
        let x = Math.random()*boardSize*boardSize;
        //populate erach cell 
        for (let i = 0; i < boardMatrix.length; i++) {

            for (let j = 0; j < boardMatrix[i].length; j++) {
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
}

console.log(gameBoard.buildBoard("beginner"));