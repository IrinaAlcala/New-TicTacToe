function TicTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer();
    const computerPlayer = new computerPlayer();
    let turn = 0;

    this.start = function() {

    }
}

function Board() {
    this.positions = Array.from(document.querySelectorAll())
}

function HumanPlayer() {

}

function ComputerPlayer() {

}
