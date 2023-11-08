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
    //1, 2, 3
    if (document.getElementById("one").textContent === "X" && document.getElementById("two").textContent === "X" && (document.getElementById("one").textContent === "X" && document.getElementById("three").textContent === "X" && document.getElementById("one").textContent !== undefined)) {
        document.getElementById("msg").innerText = "Game Won by X!";
        // stop the game; no more moves can be made
        document.getElementById("table").style.pointerEvents = "none"
    }

    if (document.getElementById("four").textContent === "X" && document.getElementById("five").textContent === "X" && (document.getElementById("four").textContent === "X" && document.getElementById("six").textContent === "X" && document.getElementById("four").textContent !== undefined)) {
        document.getElementById("msg").innerText = "Game Won by X!";
        // stop the game; no more moves can be made
        document.getElementById("table").style.pointerEvents = "none"
    }
    
}