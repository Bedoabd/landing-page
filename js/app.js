/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// define global values
const unOrderedList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
// 

// start build nav menu
function navMenu (){
    sections.forEach(function (section){
        const secHeader = section.dataset.nav;
        const item = document.createElement('li');
        const itemSpan = document.createElement('span');
        itemSpan.textContent = secHeader;
        itemSpan.setAttribute('data-nav',section.id)
        itemSpan.classList.add('menu__link');
        itemSpan.addEventListener('click', ()=>{
            section.scrollIntoView({
                behavior:"smooth",
            });
        });
        item.appendChild(itemSpan);
        fragment.appendChild(item);
    });
    unOrderedList.appendChild(fragment);
}
// event to hold building the nav till the the page is loaded
window.addEventListener('load', navMenu);
// end build nav menu


// on scroll, active the shown section
const toTop = document.querySelector('.scroll')
window.addEventListener('scroll', function(){
    const links = document.querySelectorAll('.menu__link')
    for (const section of sections) {
        let activeLink = document.querySelector(`span[data-nav="${section.id}"]`)
        if(window.scrollY >= section.offsetTop - section.offsetHeight*0.25 && window.scrollY <= section.offsetTop + section.offsetHeight*0.75){
            section.classList.add('your-active-class');
            links.forEach((activeLink)=>{
                if(activeLink.dataset.nav == section.id){
                    activeLink.classList.add('selected');
                } else {
                    activeLink.classList.remove('selected');
                }
            });
        }else{
            section.classList.remove('your-active-class');
            activeLink.classList.remove('selected');
        }
    }
    if(window.scrollY >= 600){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
});
// 

// add scroll to the top button when u swipe down
toTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:"smooth"}))


// show the menu on click
navIcon.addEventListener('click',()=>{
    showMenu();
});

// function to toggle between remove or add the class when it's called
function showMenu(){
    navIcon.classList.toggle('x-mark');
    unOrderedList.classList.toggle('show-menu');
};
// 