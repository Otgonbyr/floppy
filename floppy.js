let bird = document.getElementsByClassName("bird")
let container = document.getElementsByClassName("container")
let body = document.querySelector("body")

// let table = document.createElement("div")
// let x = document.createElement("p")
// let y = document.createElement("p")
// let speed = document.createElement("p")


let position = {
    x:0,
    y:0
}
let positionBlock = {
    x:0,
}

function moveBlock() {
    positionBlock.x = positionBlock.x + 100
    block.style.transform = `translate(-${positionBlock.x}px, 0px)`
}
function createBlockelements(num) {
    for (let a = 0; a <= num; a++) {
        block = document.getElementsByClassName("block")
        blocktop = document.getElementsByClassName("block-top")
        blockbtm = document.getElementsByClassName("block-bottom")
    }
}

createBlockelements(5)

document.addEventListener("keypress", function move(event) {
    if(event.keyCode === 119){
        position.y = position.y - 50
    }
    else if(event.keyCode === 115){
        position.y = position.y + 50
    }
    else if(event.keyCode === 97){
        position.x = position.x - 50
    }
    else if(event.keyCode === 100){
        position.x = position.x + 50
        // moveBlock()
    }
    bird[0].style.transform = `translate(${position.x}px, ${position.y}px)`
})