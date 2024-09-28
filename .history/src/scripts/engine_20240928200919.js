const state = {
    view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),    
    },
    values:{},
};

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[r] 
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      if(square.id === 1)  {}
    });
}

function initialize() {}

initialize()