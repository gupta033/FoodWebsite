`use strict`;

const home=document.querySelector('.item1')
const services=document.querySelector('.item2')
const about=document.querySelector('.item3');
const contact=document.querySelector('.item4');
const frhome=document.querySelector(".hom");
const frservice=document.querySelector('.services-container')
const frabout=document.querySelector('.client-section');
const frcontact=document.querySelector('.contact');
home.addEventListener('click',function(e){
    frhome.scrollIntoView({behavior:'smooth'});
})
services.addEventListener('click',function(e){
    frservice.scrollIntoView({behavior:'smooth'});
})
contact.addEventListener('click',function(e){
    frcontact.scrollIntoView({behavior:'smooth'});
})
about.addEventListener('click',function(e){
    frabout.scrollIntoView({behavior:'smooth'});
})