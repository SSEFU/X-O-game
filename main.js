let title = document.querySelector('.title');
let turn = 'x';
let board = ['', '', '', '', '', '', '', '', ''];

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]  
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById(a).classList.add('winner');
            document.getElementById(b).classList.add('winner');
            document.getElementById(c).classList.add('winner');
            title.innerHTML = `PLAYER ${board[a].toUpperCase()} WINS!`;
            return true;
        }
    }
    return false;
}

function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML === '' && !checkWinner()) {
        element.innerHTML = turn.toUpperCase();
        board[id] = turn;
        if (checkWinner()) {
            document.querySelectorAll('.square').forEach(cell => cell.onclick = null);
        } else {
            turn = turn === 'x' ? 'o' : 'x';
            title.innerHTML = `PLAYER ${turn.toUpperCase() === 'X' ? '1' : '2'} (${turn.toUpperCase()})`;
        }
    }
}
