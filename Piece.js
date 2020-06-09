class Piece{
    constructor(x,y,isWhite){
        this.x = x;
        this.y = y;
        this.isWhite = isWhite;
        this.taken = false;
        this.isMoving = false;
    }
    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
    
    isMovingThroughPieces(newX, newY, board){
        let xMove = this.x == newX ? 0 : newX > this.x ? 1 : -1 ;
        let yMove = this.y == newY ? 0 : newY > this.y ? 1 : -1 ;

        let i = this.x;
        let j = this.y;

        while(i != newX || j != newY){
            if(board.board[i][j] && board.board[i][j] != this)
                return true;
            i += xMove;
            j += yMove;
        }
        return false;
    }
}

class King extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♚';
        this.value = isWhite? Infinity : -Infinity;
    }

    isValidMove(newX, newY){
        return Math.abs(this.x - newX) == 1 || Math.abs(this.y - newY) == 1;
    }
}

class Queen extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♛';
        this.value = isWhite? 9 : -9;
    }

    isValidMove(newX, newY){
        return (Math.abs(this.x - newX) == Math.abs(this.y - newY)) ^ (newX == this.x ^ newY == this.y);
    }
}

class Rook extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♜';
        this.value = isWhite? 5 : -5;
    }

    isValidMove(newX, newY){
        return (newX == this.x ^ newY == this.y);
    }
}

class Bishop extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♝';
        this.value = isWhite? 3.25 : -3.25;
    }

    isValidMove(newX, newY){
        return Math.abs(this.x - newX) == Math.abs(this.y - newY);
    }
}

class Knight extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♞';
        this.value = isWhite? 3 : -3;
    }

    isValidMove(newX, newY){
        return (Math.abs(this.x - newX) == 1 && Math.abs(this.y - newY) == 2) || (Math.abs(this.x - newX) == 2 && Math.abs(this.y - newY) == 1);
    }

    isMovingThroughPieces(){
        return false;
    }
}

class Pawn extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite);
        this.symbol = '♟︎';
        this.value = isWhite? 1 : -1;
    }

    isValidMove(newX, newY, board){
        if(this.isWhite && this.y == 6 || !this.isWhite && this.y == 1)
            return Math.abs(this.y - newY) < 3 && this.x == newX;
        else
        return Math.abs(this.y - newY) < 2 && this.x == newX;
        console.log("invalid");
    }
}