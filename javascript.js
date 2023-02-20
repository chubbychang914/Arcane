// ================================================================================================================
// responsive navbar
// ================================================================================================================

// turn into burger
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// sticky navbar
window.addEventListener('scroll',()=>{
    const navbar = document.querySelector('.navbar')
    const scrolled = window.scrollY;
    if (scrolled >= 0){
        navbar.classList.add('sticky')
    }
    if (scrolled < 20){
        navbar.style.background = 'rgba(0,0,0,0.3)'
    }else{
        navbar.style.background = 'rgba(0,0,0,1)'
    }
})



// ================================================================================================================
// scroll character cards
// ================================================================================================================

// // option 2
const btn_left = document.querySelector('#btn-left')
const btn_right = document.querySelector('#btn-right')
const cardBox = document.querySelector('#char-card-box')


function leftScroll(){
    cardBox.scrollBy(500,0)
}

function rightScroll(){
    cardBox.scrollBy(-500,0)
}


btn_left.addEventListener('click',()=>{
    leftScroll()
})

btn_right.addEventListener('click',()=>{
    rightScroll()
})


// problem: keeps going right even if there's no space

// const btn_left = document.querySelector('#btn-left')
// const btn_right = document.querySelector('#btn-right')
// const cardBox = document.querySelector('#char-card-box')

// btn_right.addEventListener('click', () => {
//     content_scroll_left += 300;
//     if (content_scroll_left >= content_scroll_width) {
//         content_scroll_left = content_scroll_width;
//     }
//     cardBox.scrollLeft = content_scroll_left;
//     console.log(cardBox.scrollLeft)
// });

// btn_left.addEventListener('click', () => {
//     content_scroll_left -= 300;
//     if (content_scroll_left <= 0) {
//         content_scroll_left = 0;
//     }
//     cardBox.scrollLeft = content_scroll_left;
    
//     console.log(cardBox.scrollLeft)
// });