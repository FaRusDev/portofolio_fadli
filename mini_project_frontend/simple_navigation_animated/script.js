const toggleBtn = document.getElementById('toggle')
const navBar = document.getElementById('nav')

toggleBtn.addEventListener(
    'click', function(){
        return navBar.classList.toggle('active')
    }
)