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

// let positionBlock = [0, 0, 0, 0, 0, 0]

let positionBlock = {
    x:0,
}

function createBlockelements(num) {
    for (let a = 0; a <= num; a++) {
        let block = document.getElementsByClassName("block")
        let blocktop = document.getElementsByClassName("block-top")
        let blockbtm = document.getElementsByClassName("block-bottom")
        block.appendchild(blocktop)
        block.appendchild(blockbtm)
        container.appendchild(block)
    }
}

createBlockelements(2)

function moveBlocks() {
    positionBlock.x = positionBlock.x + 100;
    const blocks = document.getElementsByClassName("block");

    // for (let a = 0; a < positionBlock.length; a++) {
    //     if(position[a] > window.innerWidth){
    //     position[a] = 0
    //     blocks[a].remove()
    //     if(positionBlock[positionBlock.length -1 ] > 20){
    //         createBlockelements[1]
    //         positionBlock.push(0)
    //     }
    // }
    // }
    for (let a = 0; a < blocks.length; a++) {
    blocks[a].style.transform = `translate(-${positionBlock[a]}px, 0px)`;
    }
    }

    // setInterval(moveBlocks, 200)

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
        moveBlocks()
    }
    bird[0].style.transform = `translate(${position.x}px, ${position.y}px)`
})