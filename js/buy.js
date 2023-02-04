let cart = JSON.parse(localStorage.getItem("product"));
let user = JSON.parse(localStorage.getItem("now"));
let notification = document.querySelector(".message");
let a = JSON.parse(localStorage.getItem("userCart"));
if (a == null){
    localStorage.setItem("userCart",JSON.stringify(a));
}

var iden = new URLSearchParams(window.location.search).get('id');

function buynow(){
    if(user == null){
        alert("Bạn chưa đăng nhập tài khoản")
    }else{
        for(let i of cart){
            if(iden == i.id){
                let now ={
                    name:  `${i.name}`,
                    price:  i.price
                }
               a.push(now);
               localStorage.setItem("userCart",JSON.stringify(a));
               alert("Bạn đã đặt hàng thành công")
            }
        }
    }
}