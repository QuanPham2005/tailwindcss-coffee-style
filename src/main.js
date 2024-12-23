document.addEventListener("DOMContentLoaded", function(){
    const topMenu = document.getElementById('cf-top-menu')
    const toggleMenu = document.getElementById('cf-toggle-top-menu')
    
    document.addEventListener('click', (e) => {
        if (toggleMenu.contains(e.target)){
            topMenu.classList.toggle('cf-expanded')
            topMenu.classList.toggle('hidden')
        } else {
            if(topMenu.classList.contains('cf-expanded')){
                topMenu.classList.remove('cf-expanded')
                topMenu.classList.add('hidden')
            }
        }
    })
    })
    