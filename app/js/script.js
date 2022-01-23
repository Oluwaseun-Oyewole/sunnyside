
const hambugger = document.querySelector('.hambugger')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const mobilemenu = document.querySelector('.header__mobilemenu')
console.log(mobilemenu)



hambugger.addEventListener('click',() => {
    if(overlay.classList.contains('has-fade')){
        overlay.classList.remove('has-fade')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
        mobilemenu.classList.add('mobile-fadeIn') 
        mobilemenu.classList.remove('mobile-fadeOut')
    }

    else{
       overlay.classList.remove('fade-in')
       overlay.classList.add('fade-out')
       overlay.classList.add('has-fade')
       mobilemenu.classList.remove('mobile-fadeIn')
       mobilemenu.classList.add('mobile-fadeOut')
    }
})