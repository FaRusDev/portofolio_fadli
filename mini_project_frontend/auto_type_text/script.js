const text = document.getElementById('text')
const speed = document.getElementById('speed')
const textToDisplay = document.getElementById('txt')
const button = document.getElementById('btn')

let sliceString = 1
let speedVal = 1000 / speed.value

function displayText(){
    text.innerText = textToDisplay.value.slice(0, sliceString)

    sliceString = sliceString+1

    if (sliceString > textToDisplay.value.length){
        sliceString = 1
    }

    setTimeout(displayText,speedVal)    
}

speed.addEventListener('input', (e) => speedVal = 300 / e.target.value)


