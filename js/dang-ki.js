const taiKhoan = [
    {
        tenDangNhap:"Khang",
        matKhau:"1234",
        gmail:"ahihi@gmail.com"
    }
];

let user = JSON.parse(localStorage.getItem('mang'))
if(user == null){
    localStorage.setItem("mang",JSON.stringify(taiKhoan));
    console.log("2");
}
function submit() {
    let _userName = document.querySelector("#username").value;
    let _password = document.querySelector("#password").value;
    let _email = document.querySelector("#email").value;
    account = {
        tenDangNhap: _userName,
        matKhau: _password,
        gmail: _email
    }
    user.push(account)
    localStorage.setItem("mang",JSON.stringify(user));
    document.getElementById("link").href = "login.html";
    window.alert("Bạn đã đăng kí thành công");
}