const resetBtn = document.getElementById("resetBtn");
let boxes = document.getElementsByClassName("box");
let boxText = document.querySelectorAll(".boxText");
const info = document.querySelector(".info");
const background = document.querySelector('.background')

let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};


let isgameover = false;
// let allBoxesFilled =

const allBoxesFilled =()=>{
  return Array.from(boxText).filter((box) => box.textContent === "").length > 0
   ? false
   : true;
  }


const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winnerFound = false;

  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      info.textContent = `${boxText[e[0]].innerText} Won`;
      flag = false;
      info.style.color = "green";
      isgameover = true;
      winnerFound = true
      background.style.background = "URL(./images/giphy1.gif)";
      background.style.backgroundRepeat = "no-repeat";
      background.style.backgroundSize = "cover";
      document.querySelector('.main-heading').style.color = 'green'
    }
  });

  if (!winnerFound && allBoxesFilled()) {
    info.textContent = `Match Tied`;
  }


 
};

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  
  element.addEventListener("click", () => {
    if (!isgameover) {
      if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        
        if(turn == '0'){
          element.style.backgroundColor = "rgb(191, 146, 191)";
          element.style.color = 'white'
        }
        else{
          element.style.backgroundColor = "purple";
          element.style.color = "white";
        }
        turn = changeTurn();
        info.textContent = `Turn of ${turn}`;
        checkWin();
        
      }
    }
  });
});

resetBtn.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");

  boxText.forEach((box) => {
    box.textContent = "";
    turn = "X";
    info.textContent = `Turn of ${turn}`;
    info.style.color = "black";
    isgameover = false
    box.parentElement.style.backgroundColor= 'white'
    background.style.background = '#f4f4f4'
    document.querySelector(".main-heading").style.color = "black";
    winnerFound= false    
  });
});
