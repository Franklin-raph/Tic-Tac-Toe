const boxes = document.querySelectorAll('.box')
const playerXScore = document.querySelector('.playerXScore')
const playerOScore = document.querySelector('.playerOScore')
const currentPlayerText = document.querySelector('.currentPlayerText')
const modalWrapper = document.querySelector('.modalWrapper')
const winnerPlayerText = document.querySelector('.winnerPlayerText')
const html = document.querySelector('html')

const X_TEXT = 'X';
const O_TEXT = 'O';
let X_SCORE = 0
let O_SCORE = 0
playerOScore.innerText = O_SCORE
playerXScore.innerText = X_SCORE
let currentPlayer = X_TEXT;
currentPlayerText.innerText = `Player ${currentPlayer} TURN`
currentPlayerText.style.marginBottom = "20px"


// spaes array would help us keep track of what is in the boxes
let spaces = Array(9).fill(null)
boxes.forEach(box => {
    box.addEventListener("click", boxClicked)
})

function boxClicked(e){
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon() !== false){
            currentPlayerText.innerText = `Player ${currentPlayer} has won!!!`
            modalWrapper.style.visibility = "visible"
            winnerPlayerText.innerText = `Player ${currentPlayer} has won!!!`
            let wininngPlayer = currentPlayerText.innerText
            html.style.overflowY = "hidden"
            
            if(wininngPlayer.toString().split('')[7] === "X"){
                X_SCORE++
                playerXScore.innerText = X_SCORE
            }else{
                O_SCORE++
                playerOScore.innerText = O_SCORE
            }
            let winningTiles = playerHasWon()
            winningTiles.map(box => {
                boxes[box].style.backgroundColor = "#001931c7";
                boxes[box].style.color = "#fff"
            })
            return;
        }
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT
        currentPlayerText.innerText = `Player ${currentPlayer} TURN`
    }
}

function playerHasWon(){
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            return [0,1,2];
        }

        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            return [0,3,6];
        }

        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            return [0,4,8];
        }
    }

    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            return [8,2,5];
        }

        if(spaces[7] === currentPlayer && spaces[6] === currentPlayer){
            return [8,7,6];
        }

        if(spaces[4] === currentPlayer && spaces[0] === currentPlayer){
            return [8,4,0];
        }
    }

    if(spaces[4] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            return [4,3,5];
        }

        if(spaces[7] === currentPlayer && spaces[1] === currentPlayer){
            return [4,7,1];
        }
        if(spaces[2] === currentPlayer && spaces[6] === currentPlayer){
            return [4,2,6];
        }
    }
    return false
}

function restartGame(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ""
        box.style.color = ""
        box.style.backgroundColor = ""
    })

    currentPlayer = X_TEXT;
    currentPlayerText.innerText = `Player ${currentPlayer} TURN`

    modalWrapper.style.visibility = "hidden"
    html.style.overflowY = "scroll"
}

function resetScore(){
    X_SCORE = 0
    O_SCORE = 0
    playerOScore.innerText = O_SCORE
    playerXScore.innerText = X_SCORE
}