document.getElementById("btnDaftar").onclick = function(){

let nama=document.getElementById("nama").value;

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(nama=="" || email=="" || password==""){

alert("Semua data wajib diisi!");

return;

}

alert("Registrasi berhasil!");

window.location.href="login.html";

}