// let squares = document.querySelectorAll('.square');
// let currentPlayer = 'X';

// squares.forEach(function(square) {
//     square.addEventListener('click', function() {
//         if (!square.classList.contains('marked')) {
//             square.classList.add('marked');
//             square.textContent = currentPlayer;
//             checkForWinner();
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         }
//     });
// });

// function checkForWinner() {
//     let winningCombos = [        [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     for (let i = 0; i < winningCombos.length; i++) {
//         let combo = winningCombos[i];
//         if (squares[combo[0]].textContent === currentPlayer &&
//             squares[combo[1]].textContent === currentPlayer &&
//             squares[combo[2]].textContent === currentPlayer) {
//             alert(currentPlayer + ' wins!');
//             resetBoard();
//             return;
//         }
//     }

//     let isTie = true;
//     for (let i = 0; i < squares.length; i++) {
//         if (!squares[i].classList.contains('marked')) {
//             isTie = false;
//             break;
//         }
//     }

//     if (isTie) {
//         alert('It\'s a tie!');
//         resetBoard();
//     }
// }

// function resetBoard() {
//     squares.forEach(function(square) {
//         square.classList.remove('marked');
//         square.textContent = '';
//     });

//     currentPlayer = 'X';
// }

let player = "X"
let counter = 0
board = [0,0,0,0,0,0,0,0,0]

function test(id)
{
    if (counter%2==0 && board[id] == 0)
    {
        board[id]="X"
        document.getElementById(id).innerText="X"
        counter++;
    }
    else if (counter%2!=0 && board[id] == 0)
    {
        board[id]="O"
        document.getElementById(id).innerText="O"
        counter++;
    }
}