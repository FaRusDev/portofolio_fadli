const number = document.getElementById("num")
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

const inputnumber = document.querySelector(".input")
const start = document.querySelector('#start')



runAnimation(5)

replay.addEventListener('click', () => {
    resetDOM()
})

function resetDOM() {
    // inputnumber.classList.add('hide')
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    
    document.querySelectorAll('.nums span').forEach((num) => {
      num.classList.value = ''
    })
  
    document.querySelectorAll('.nums span')[0].classList.add('in')
  }


function runAnimation(count) {
    // inputnumber.classList.add('hide')
    // counter.classList.add("show")

    // adding span to nums class
    for (let index = count; index >= 0; index--) {
        let x = document.createElement("span")
        x.innerText = index
        document.getElementById("num").append(x)
    }
    //get all span in nums class
   document.querySelectorAll('.nums span')

    //animating based on how much span in nums class
    document.querySelectorAll('.nums span').forEach((num, index) => {
    const nextToLast = document.querySelectorAll('.nums span').length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && index !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        // inputnumber.classList.add('hide')
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}





