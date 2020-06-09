let board = new Board();
let movingPiece;
let isMoving = false;

let playerTurn = true;

function setup(){
  createCanvas(504,504);
  textAlign(CENTER, CENTER);
  textFont("Arial Unicode MS");
  textSize(50);
}

function draw(){
  board.show();
}

function mousePressed(){
  if(mouseX > width || mouseY > height || !playerTurn) 
    return;
  let boardX = Math.floor((mouseX/width) * 8);
  let boardY = Math.floor((mouseY/height) * 8);
  console.log(Math.abs(boardX), Math.abs(7-boardY));
  let piece = board.board[boardX][boardY];
  if(piece){
    isMoving = true;
    piece.isMoving = true;
    movingPiece = piece;
  }
}

function mouseReleased(){
  if(!isMoving) 
    return;
  if(mouseX > width || mouseY > height){ 
    isMoving = !isMoving;
    movingPiece.isMoving = false;
    return;
  }
  movingPiece.isMoving = false;
  let boardX = Math.floor((mouseX/width) * 8);
  let boardY = Math.floor((mouseY/height) * 8);
  if(movingPiece.isValidMove(boardX, boardY) && !movingPiece.isMovingThroughPieces(boardX,boardY,board)){
    board.board[movingPiece.x][movingPiece.y] = null;
    board.board[boardX][boardY] = movingPiece;
    movingPiece.move(boardX,boardY);
    isMoving = false;
  }
  movingPiece = null;
  //playerTurn = false;
}