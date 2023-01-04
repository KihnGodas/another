let _userName = document.querySelector(".username").value;
let _passWord = document.querySelector(".password").value;
let test = [];
function dangNhap(){
    test = JSON.parse(localStorage.getItem("mang"));
    let userName = test.tenDangNhap;
    let password = test.matKhau;
    if(_userName == userName && _passWord == password){
        console.log("yay");
        window.alert("yay")
    }
}
