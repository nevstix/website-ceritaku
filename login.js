// Tombol Login
document.getElementById("btnLogin").addEventListener("click", function () {

    // Ambil data dari input
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validasi
    if (email === "" || password === "") {
        alert("Email dan Password wajib diisi!");
        return;
    }

    // Login berhasil
    alert("Selamat datang di CERITAKU!");

    // Pindah ke Dashboard
    window.location.href = "dashboard.html";

});