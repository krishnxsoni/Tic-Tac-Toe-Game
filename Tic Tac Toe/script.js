console.log("Welcome to tic tac toe");
let music = new Audio("start.mp3");
let audioturn = new Audio("music.wav");
let gameover = new Audio("end.mp3");
let turn = "X";
let gameend = false;

const changeTurn = ()=>{
    return turn === "X" ? "0":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [1,4,7],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won";
            gameend = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameend){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameend = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
})