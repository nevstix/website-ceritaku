// ======================
// DASHBOARD CERITAKU
// ======================

// Sidebar

document.getElementById("tulis").onclick=function(){

window.location.href="tulis.html";

}

document.getElementById("explore").onclick=function(){

window.location.href="explore.html";

}

document.getElementById("novel").onclick=function(){

window.location.href="novel_saya.html";

}

document.getElementById("bookmark").onclick=function(){

window.location.href="bookmark.html";

}

document.getElementById("profil").onclick=function(){

window.location.href="profil.html";

}

document.getElementById("setting").onclick=function(){

window.location.href="setting.html";

}

// Logout

document.getElementById("logout").onclick=function(){

if(confirm("Yakin ingin logout?")){

window.location.href="index.html";

}

}

// Menu Cepat

document.getElementById("btnTulis").onclick=function(){

window.location.href="tulis.html";

}

document.getElementById("btnBaca").onclick=function(){

window.location.href="explore.html";

}

document.getElementById("btnProfil").onclick=function(){

window.location.href="profil.html";

}

document.getElementById("btnSetting").onclick=function(){

window.location.href="setting.html";

}

// Lanjut Edit

document.getElementById("lanjutEdit").onclick=function(){

window.location.href="chapter.html";

}

// Animasi Card

const card=document.querySelectorAll(".card");

card.forEach(function(item){

item.addEventListener("mouseenter",function(){

item.style.transform="translateY(-10px)";

});

item.addEventListener("mouseleave",function(){

item.style.transform="translateY(0px)";

});

});

// Jam

let salam=document.querySelector(".header h1");

let jam=new Date().getHours();

if(jam<12){

salam.innerHTML="☀️ Selamat Pagi";

}else if(jam<15){

salam.innerHTML="🌤 Selamat Siang";

}else if(jam<18){

salam.innerHTML="🌇 Selamat Sore";

}else{

salam.innerHTML="🌙 Selamat Malam";

}
// Klik Profil

document.querySelector(".profile").onclick=function(){

window.location.href="profil.html";

}

// Klik Notifikasi

document.querySelector(".notification").onclick=function(){

alert("Belum ada notifikasi baru.");

}