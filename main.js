const childBlock = document.querySelector('.child-block')
let x = 0, y = 0

const moveBlock = () => {
    if (x <= 440 && y === 0){
        x++
        childBlock.style.left = `${x}px`
        setTimeout(() => moveBlock(),0)
    }
    else if(y <= 440 && x >= 440){
        y++
        childBlock.style.transform = 'rotate(90deg)'
        childBlock.style.top = `${y}px`
        setTimeout(() => moveBlock(),0)
    }
    else if (x >= 0 && y >= 440) {
        x--
        childBlock.style.left = `${x}px`
        childBlock.style.transform = 'rotate(180deg)'
        setTimeout(() => moveBlock(),0)
    }
    else if (x <= 0 && y >= 0) {
        y--
        childBlock.style.left = `${y}px`
        childBlock.style.transform = 'rotate(270deg)'
        setTimeout(() => moveBlock(),0)
    }
}
moveBlock()
