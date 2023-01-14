let test = JSON.parse(localStorage.getItem("mang"));
let link = document.getElementById("link")
let btn = document.querySelector(".btn");
let check = document.querySelector(".check");


btn.addEventListener("click", function () {
  let _userName = document.querySelector(".username").value;
  let _passWord = document.querySelector(".password").value;
  for (let i = 0; i < test.length; i++) {
    if (test[i].tenDangNhap == _userName && test[i].matKhau == _passWord) {
        link.href = "login.html";
        let now = {
          userName: _userName,
          password: _passWord
        };
        localStorage.setItem("now",JSON.stringify(now));
    }
    else if (test[i].tenDangNhap != _userName || test[i].matKhau != _passWord){
      check.innerHTML = "<p>Bạn đã nhập sai tài khoản hoặc mật khẩu</p>"
    }
  }

});
