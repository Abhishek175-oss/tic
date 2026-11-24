let player = "X";
let moves = 0;
let gameOver = false;
let status = document.getElementById("status");
let cells = [
  document.getElementById("c1"), document.getElementById("c2"), document.getElementById("c3"),
  document.getElementById("c4"), document.getElementById("c5"), document.getElementById("c6"),
  document.getElementById("c7"), document.getElementById("c8"), document.getElementById("c9")
];

function play(i) {
  if (cells[i].textContent !== "" || gameOver) return;

  cells[i].textContent = player;
  moves = moves + 1;

  if (
    (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) ||
    (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) ||
    (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) ||
    (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) ||
    (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
    (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
  ) {
    status.textContent = player + " wins!";
    gameOver = true;
    window.showConfetti();
  } else if (moves === 9) {
    status.textContent = "It's a draw!";
    gameOver = true;
  } else {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }

    status.textContent = player + "'s turn";
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = function () {
    play(i);
  };
}

document.getElementById("restart").onclick = function () {
  window.location.reload();
};
