document.addEventListener("DOMContentLoaded", function () {

    const username = localStorage.getItem("name");

    const btnLogin = document.getElementById("btnLogin");
    const userName = document.getElementById("userName");
    const btnLogout = document.getElementById("btnLogout");

    // Nếu chưa đăng nhập
    if (!username) {
        btnLogin.style.display = "inline-block";
        userName.style.display = "none";
        btnLogout.style.display = "none";
        return;
    }

    // Nếu đã đăng nhập
    btnLogin.style.display = "none";

    userName.style.display = "inline-block";
    userName.innerHTML = `<i class="fa-solid fa-user"></i> ${username}`;

    btnLogout.style.display = "inline-block";

    // Click username → profile
    userName.onclick = function () {
        window.location.href = "profile.html";
    };

    // Logout
    btnLogout.onclick = function () {

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.username);
        localStorage.setItem("userId", data.id);

        alert("Đã đăng xuất");

        window.location.href = "login.html";

    };

});