
const hambugger = document.querySelector('.hambugger')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const mobilemenu = document.querySelector('.header__mobilemenu')
const header__image = document.querySelector('.header__content > img')




hambugger.addEventListener('click',() => {
    if(overlay.classList.contains('has-fade')){
        overlay.classList.remove('has-fade')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
        mobilemenu.classList.add('mobile-fadeIn') 
        mobilemenu.classList.remove('mobile-fadeOut')

        header__image.classList.add('has-fade')
    }

    else{
       overlay.classList.remove('fade-in')
       overlay.classList.add('fade-out')
       overlay.classList.add('has-fade')
       mobilemenu.classList.remove('mobile-fadeIn')
       mobilemenu.classList.add('mobile-fadeOut')
       header__image.classList.remove('has-fade')
    }
})