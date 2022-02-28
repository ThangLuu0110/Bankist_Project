const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerNavbarButton = $('.header__navbar-button');
const accountButton = $('.account-button');
const modalCover = $('.modal-cover');
const modal = $('.modal');
const closeButton = $('.close__button');
const header = $('.header');
const operationsTopicsItem = $$('.operations__topics-item');
const operations = $$('.operations');
const leftArrow = $('.arrow-button.left')
const rightArrow = $('.arrow-button.right')
const testimonialsSlide = $('.testimonials-comment');

console.log(operationsTopicsItem);
console.log(operations);
function openModal(){
    modalCover.classList.remove('close-modal');
    modal.classList.remove('close-modal');
    $('.content__banner').style.marginTop = '90px';
}
function closeModal(){
    modalCover.classList.add('close-modal');
    modal.classList.add('close-modal');
}
headerNavbarButton.addEventListener('click',openModal);
accountButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);


window.onscroll = function(){
    if(window.scrollY > 730){
        header.classList.add('header--fixed')
    }
    else{
        header.classList.remove('header--fixed')
    }
}   

operationsTopicsItem.forEach((topic, index) => {
    topic.onclick = () =>{
        $('.operations__topics-item.active').classList.remove('active')
        topic.classList.add('active')
        $('.operations.active').classList.remove('active')
        operations[index].classList.add('active')
    }
})


var x_axis = 0;
rightArrow.onclick = () =>{
    if(x_axis > -66.66){
        x_axis = x_axis - 100/3;
    }
    else{
        x_axis = 0;
    }
    console.log(x_axis);
    testimonialsSlide.style.transform = `translate(${x_axis}%)`;
}
leftArrow.onclick = () =>{
    if(x_axis < 0){
        x_axis = x_axis + 100/3;
    }
    else{
        x_axis = -200/3;
    }
    console.log(x_axis);
    testimonialsSlide.style.transform = `translate(${x_axis}%)`;
}
