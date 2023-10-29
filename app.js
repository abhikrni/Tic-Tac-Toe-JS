function myFunction(event){
    console.log("clicked " + event.target.id)
    // const node = document.createElement("p")
    // const num = document.createTextNode(event.target.id)
    // node.appendChild(num)
    // num.innerHTML = "x"
    document.getElementById(event.target.id).innerHTML = "X"
}