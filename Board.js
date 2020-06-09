class Board{
    constructor(){
        this.board = [];
        for(let i = 0; i<9; i++)
            this.board.push([]);
        
        for(let i = 0; i < 9; i++){
            this.board[i][6] = new Pawn(i,6,true);
            this.board[i][1] = new Pawn(i,1,false);
        }

        this.board[0][0] = new Rook(0,0,false);
        this.board[7][0] = new Rook(7,0,false);
        this.board[0][7] = new Rook(0,7,true);
        this.board[7][7] = new Rook(7,7,true);

        this.board[1][0] = new Knight(1,0,false);
        this.board[6][0] = new Knight(6,0,false);
        this.board[1][7] = new Knight(1,7,true);
        this.board[6][7] = new Knight(6,7,true);

        this.board[2][0] = new Bishop(2,0,false);
        this.board[5][0] = new Bishop(5,0,false);
        this.board[2][7] = new Bishop(2,7,true);
        this.board[5][7] = new Bishop(5,7,true);

        this.board[3][0] = new Queen(3,0,false);
        this.board[3][7] = new Queen(3,7,true);

        this.board[4][0] = new King(4,0,false);
        this.board[4][7] = new King(4,7,true);
    }
    drawBoard(){
        let scl = width/8;
        let isWhite = false;
        noStroke();
        for(let i = 0; i < 8; i++){
            isWhite = !isWhite;
            for(let j = 0; j < 8; j++){
                if(isWhite)
                    fill(181,136,99);
                    //fill(241,246,178);
                else
                    fill(240,217,181)
                    //fill(89,147,93);
                square(i * scl, j*scl, scl);
                isWhite = !isWhite;
            }
        }
    }
    
    drawPieces(){
        stroke(0);
        let scl = width/8;
        for(let i = 0; i < 8; i++)
            for(let j = 0; j < 8; j++){
                if(this.board[i][j]){
                    if(this.board[i][j].isWhite){
                        strokeWeight(4);
                        fill(255);
                    }
                    else{
                        strokeWeight(0);
                        fill(0);
                    }
                    if(this.board[i][j].isMoving)
                        text(this.board[i][j].symbol, constrain(mouseX,0,width), constrain(mouseY,0,height));
                    else
                        text(this.board[i][j].symbol, i*scl + (scl/2), j*scl + (scl/2));
                }
            }
                
    }

    show(){
        this.drawBoard();
        this.drawPieces();
    }
}