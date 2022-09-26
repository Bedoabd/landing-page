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

/**
 * Define Global Variables
 * 
*/
const unOrderedList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const toTop = document.querySelector('.scroll');
const links = document.querySelectorAll('.menu__link');
const navIcon = document.querySelector('.nav-icon');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
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
            showMenu()
        });
        item.appendChild(itemSpan);
        fragment.appendChild(item);
    });
    unOrderedList.appendChild(fragment);
}
window.addEventListener('load', navMenu);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
window.addEventListener('scroll', function(){
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
toTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:"smooth"}))
// build the nav    
navIcon.addEventListener('click',()=>{
    showMenu()
})
function showMenu(){
    navIcon.classList.toggle('x-mark')
    unOrderedList.classList.toggle('show-menu')
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


