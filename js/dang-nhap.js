let test = JSON.parse(localStorage.getItem("mang"));
let link = document.getElementById("link")
let btn = document.querySelector(".btn");
let check = document.querySelector(".check");


btn.addEventListener("click", function (e) {
  let _userName = document.querySelector(".username").value;
  let _passWord = document.querySelector(".password").value;
  console.log(_userName,_passWord);
  for (let i = 0; i < test.length; i++) {
    if (test[i].tenDangNhap == _userName  && test[i].matKhau == _passWord) {
        window.location.replace("homepage.html");
        let now = {
          userName: _userName,
          password: _passWord
        };
        localStorage.setItem("now",JSON.stringify(now));
    }
    else{
      document.querySelector(".check").innerHTML = "Bạn đã nhập sai tài khoản hoặc mật khẩu"
      e.preventDefault();
      
    }
  }
});
