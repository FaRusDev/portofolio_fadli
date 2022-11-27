const loadText = document.querySelector('.text-loading')
const bg = document.querySelector('.bgCover')

let loading = 0
let interval = setInterval(blurImage, 30)



function blurImage(){
    loading++

    if(loading > 99){
        clearInterval(interval)
    }

    loadText.innerText = `${loading}%`
    loadText.style.opacity = scale(loading,0,100,1,0)
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min,out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
