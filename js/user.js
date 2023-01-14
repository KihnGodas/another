let check = JSON.parse(localStorage.getItem("now"));
let name = document.querySelector(".sign-in");

if(check != null){
    name.innerHTML = `Xin chào ${check.userName}
                    <button onclick="signOut()">Đăng xuất</button>`;
}

function signOut(){
    localStorage.removeItem("now");
    name.innerHTML = `<a href="/login.html">Đăng nhập</a>`
}