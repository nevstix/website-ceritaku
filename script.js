const text="Selamat Datang di CERITAKU";

let i=0;

function ketik(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(ketik,80);

}

}

ketik();

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});

document.getElementById("mulai").addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});