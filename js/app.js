const navMenu = document.querySelector('.nav__menu');
const navIconOpen = document.querySelector('.nav__icon--open');
const navIconClose = document.querySelector('.nav__icon--close');
const nav = document.querySelector('.nav');

navIconOpen.addEventListener('click', () => {
    console.log('Abrir')
    navMenu.classList.add('spred');
    navIconOpen.classList.add('hidden');
    navIconClose.classList.remove('hidden');
})
navIconClose.addEventListener('click', () => {
    navMenu.classList.remove('spred');
    navIconOpen.classList.remove('hidden');
    navIconClose.classList.add('hidden');
})
navMenu.addEventListener('click', ()=>{
    navMenu.classList.remove("spred")
    navIconOpen.classList.remove('hidden');
    navIconClose.classList.add('hidden');
})

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
});
