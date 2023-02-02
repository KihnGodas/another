let arr = [
  {
    a: "homepage.html",
    name: " Trang chủ ",
  },
  {
    a: "cart.html",
    name: " Giỏ hàng",
  },
  {
    a: "product.html",
    name: " Sản phẩm ",
  }
];
let arr1 = {
  a:"login.html",
  name : "Đăng nhập"
}

let navBar = document.querySelector(".nav-bar");
if(navBar){
    navBar.innerHTML = '';
    for(let i of arr){
        navBar.innerHTML +=`<div class="link">
                            <a href="/${i.a}">${i.name}</a>
                            </div>
                            `
    }
}
let login = document.querySelector(".login");
let tk = JSON.parse(localStorage.getItem("now"));
if(tk != null){
  login.innerHTML = `Xin chào ${tk.userName}
                  <button onclick="signOut()">Đăng xuất</button>`;
}else if(tk == null){
  login.innerHTML =` <a href="/${arr1.a}">${arr1.name}</a>`
}
function signOut(){
  localStorage.removeItem("now");
  login.innerHTML = `<a href="/login.html">Đăng nhập</a>`
}