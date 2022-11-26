const text = document.getElementById('text')
const speed = document.getElementById('speed')
const textToDisplay = "My Name Is Fadli Rusandy"

let sliceString = 1
let speedVal = 1000 / speed.value
speed.addEventListener('input', (e) => speedVal = 300 / e.target.value)


function displayText(){
    text.innerText = textToDisplay.slice(0, sliceString)

    sliceString = sliceString+1

    if (sliceString > textToDisplay.length){
        sliceString = 1
    }

    setTimeout(displayText,speedVal)

    
}


displayText()

