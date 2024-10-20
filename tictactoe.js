let boxes=document.querySelectorAll("#box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");

let turno=true;

//2d array
let winningpatern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
    if(turno){
        box.innerText="O";
        turno=false;
    }else{
        turno=true;
        box.innerText="X"; 
    }
    box.disabled=true;
    let iswinner=cheackwinner();
    count++;
    if(count=== 9 && !iswinner){
        drawgame();
    }
    cheackwinner();
    });
});
const cheackwinner= ()=>{
  for(let pattern of winningpatern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
       if(pos1val !="" && pos2val !="" &&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
           document.querySelector("p").innerText=`Congratulations..!Winner is ${pos1val}`;
           disablebox();
        }
       }
  }
}
const disablebox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
  turno=true;
  enablebox();
  document.querySelector("p").innerText=``;
}
const drawgame=()=>{
    document.querySelector("p").innerText=`OOP's no one wins...! plese start New game`;
    disablebox();
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);