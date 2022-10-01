const boxes = document.querySelectorAll('.box')
const currentPlayerEl = document.querySelector('.currentPlayer')
const playerXScore = document.querySelector('.playerXScore')
const playerOScore = document.querySelector('.playerOScore')

const X_TEXT = 'X';
const O_TEXT = 'O';
let X_SCORE = 0
let O_SCORE = 0
playerOScore.innerText = O_SCORE
playerXScore.innerText = X_SCORE
let currentPlayer = X_TEXT;
currentPlayerEl.innerText = `Player ${currentPlayer} TURN`

console.log(typeof X_SCORE)


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
            currentPlayerEl.innerText = `Player ${currentPlayer} has won!!!`
            let wininngPlayer = currentPlayerEl.innerText

            if(wininngPlayer.toString().split('')[7] === "X"){
                console.log("X has won")
                X_SCORE++
                playerXScore.innerText = X_SCORE
                console.log(`X => ${X_SCORE}`)
            }else{
                O_SCORE++
                playerOScore.innerText = O_SCORE
                console.log(`O => ${O_SCORE}`)
            }
            let winningTiles = playerHasWon()
            winningTiles.map(box => {
                boxes[box].style.backgroundColor = "#001931c7";
                boxes[box].style.color = "#fff"
            })
            return;
        }
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT
        currentPlayerEl.innerText = `Player ${currentPlayer} TURN`
    }
}

function playerHasWon(){
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            return [0,1,2];
        }

        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(typeof currentPlayer)
            return [0,3,6];
        }

        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(typeof currentPlayer)
            return [0,4,8];
        }
    }

    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(typeof currentPlayer)
            return [8,2,5];
        }

        if(spaces[7] === currentPlayer && spaces[6] === currentPlayer){
            console.log(typeof currentPlayer)
            return [8,7,6];
        }

        if(spaces[4] === currentPlayer && spaces[0] === currentPlayer){
            console.log(typeof currentPlayer)
            return [8,4,0];
        }
    }

    if(spaces[4] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(typeof currentPlayer)
            return [4,3,5];
        }

        if(spaces[7] === currentPlayer && spaces[1] === currentPlayer){
            console.log(typeof currentPlayer)
            return [4,7,1];
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
    currentPlayerEl.innerText = `Player ${currentPlayer} TURN`


}