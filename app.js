let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;
let clickCount = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = ()=>{
turnO = true ;
clickCount = 0;
enableBoxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner)=>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide")
  disableboxes();
};
const checkWinner = () => {
  clickCount+=1;
  console.log(clickCount)
  for (patterns of winPatterns) {
    
    let Pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    
    if(Pos1Val != ""&& pos2Val != "" && pos3Val != ""){
        if(Pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(Pos1Val);
        }
        else if (clickCount ==9){
          msg.innerText = "Game Draw";
          msgContainer.classList.remove("hide")
          disableboxes();
        }
    }
    
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);