//take all element based on their id
const text = document.getElementById('text')
const speed = document.getElementById('speed')
const textToDisplay = document.getElementById('txt')
const button = document.getElementById('btn')

//count slice string
let sliceString = 1

//setting speed 1000ms divided by speed value that you input
let speedVal = 1000 / speed.value

function displayText(){
    //modif your h1 inner text to be value that you input on input element
    //also slice it start from 1 (it's from the sliceString variable)
    text.innerText = textToDisplay.value.slice(0, sliceString)

    //after you slice it then it has to automatically move forward
    //so we have to move to the next letter and set it as the new beginning of counting 
    sliceString = sliceString+1

    //condition if the text that you input is already done 
    //then you have to make the sliceString to 1 again to start over the counting
    if (sliceString > textToDisplay.value.length){
        sliceString = 1
    }

    //this is the function to set the speed of the letter typed on the h1 element
    //this is the example of callback function
    setTimeout(displayText,speedVal)    
}

//here is to set the speed when you type the speed on input element
speed.addEventListener('input', (e) => speedVal = 300 / e.target.value)


