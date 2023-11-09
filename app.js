let sign = "X"

function myFunction(event){
    // What does this function do? 
    if (document.getElementById(event.target.id).innerHTML === "X" || 
    document.getElementById(event.target.id).innerHTML === "O") {
        return null
    }

    if (sign === "X") {
        // console.log("X")
        document.getElementById(event.target.id).innerHTML = "X"
        sign = "O"
    } else {
        // console.log("O")
        document.getElementById(event.target.id).innerHTML = "O"
        sign = "X"
    }

    gameCheck()
}
// 1,2,3 | 4,5,6 | 7,8,9 | 1,4,7 | 2,5,8 | 3,6,9 | 1, 5, 9 | 3, 5, 7 ---> winning combos

function gameCheck(){
    //check conditions
    //1, 2, 3
    const one = document.getElementById("one").textContent
    const two = document.getElementById("two").textContent
    const three = document.getElementById("three").textContent
    const four = document.getElementById("four").textContent
    const five = document.getElementById("five").textContent
    const six = document.getElementById("six").textContent
    const seven = document.getElementById("seven").textContent
    const eight = document.getElementById("eight").textContent
    const nine = document.getElementById("nine").textContent


    checkWin(one, two, three)
    checkWin(four, five, six)
    checkWin(seven, eight, nine)
    checkWin(one, four, seven)
    checkWin(two, five, eight)
    checkWin(three, six, nine)
    checkWin(one, five, nine)
    checkWin(three, five, seven)
 
    if ((one === "X" || one === "O") && (two === "X" || two === "O") && (three === "X" || three === "O") && 
        (four === "X" || four === "O") && (five === "X" || five === "O") && (six === "X" || six === "O") &&
        (seven === "X" || seven === "O") && (eight === "X" || eight === "O") && (nine === "X" || nine === "O")) {
            document.getElementById("msg").innerText = "Game Draw!";
        }
}

function checkWin(one, two, three){
    if (one === "X" && two === "X" && one === "X" && three === "X" && one !== undefined ) {
        document.getElementById("msg").innerText = "Game Won by X!";
        // stop the game; no more moves can be made
        document.getElementById("table").style.pointerEvents = "none"
    }
    if (one === "O" && two === "O" && one === "O" && three === "O" && one !== undefined) {
        document.getElementById("msg").innerText = "Game Won by O!";
        // stop the game; no more moves can be made
        document.getElementById("table").style.pointerEvents = "none"
    }
    
}

/*
(one === "X" || one === "O") && (two === "X" || two === "O") && (three === "X" || three === "O")
        (four === "X" || four === "O") && (five === "X" || five === "O") && (six === "X" || six === "O")
        (seven === "X" || seven === "O") && (eight === "X" || eight === "O") && (nine === "X" || nine === "O")
*/

function restart(){
    location.reload();
}