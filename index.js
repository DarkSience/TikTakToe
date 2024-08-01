let grid = document.querySelectorAll(".cell");
let turns = document.querySelectorAll(".turns div");
let turn = 1;
changeTurn();
for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", function () {
    setCell(this);
    checkWin();
  });
}

function setCell(obj) {
  if (obj.classList.contains("red") || obj.classList.contains("blue")) {
  } else {
    if (turn === 1) {
      obj.classList.add("red");
      obj.innerHTML = "X";
      obj.classList.remove("grey");
    } else {
      obj.classList.add("blue");
      obj.innerHTML = "O";
      obj.classList.remove("grey");
    }
    turn = turn == 1 ? 2 : 1;
    changeTurn();
  }
}

function changeTurn() {
  if (turn === 1) {
    console.log("turn 1");
    turns[1].classList.remove("red", "blue");
    turns[1].classList.add("grey");
    turns[0].classList.add("red");
    turns[0].innerHTML = "X";
    turns[1].innerHTML = "";
  } else {
    turns[0].classList.remove("red", "blue");
    turns[0].classList.add("grey");
    turns[1].classList.add("blue");
    turns[1].innerHTML = "O";
    turns[0].innerHTML = "";
  }
}

function checkWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    if (
      grid[winConditions[i][0]].classList.contains("red") &&
      grid[winConditions[i][1]].classList.contains("red") &&
      grid[winConditions[i][2]].classList.contains("red")
    ) {
      document.querySelector("h1").innerHTML = "RED WON";
    }
    if (
      grid[winConditions[i][0]].classList.contains("blue") &&
      grid[winConditions[i][1]].classList.contains("blue") &&
      grid[winConditions[i][2]].classList.contains("blue")
    ) {
      document.querySelector("h1").innerHTML = "BLUE WON";
    }
  }
}
