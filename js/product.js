let listItem = [
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:20,
        name : "Khay mứt kẹo tết",
        type: "good",
        id : "1"
    },
    {
        img:"img/product/b7c100c3682e6caccddc24d865a0d01e.jpeg",
        name :"Kẹo ngô",
        price:150,
        type: "food",
        id : "2"
    },
    {
        img:"img/product/index.jpg",
        price:200,
        name : "Kẹo dừa",
        type: "food",
        id : "3"
    },
    {
        img:"img/product/dbded30259fadc1327322a5039683b88_tn.jpg",
        price:100,
        name: "Khăn trải bàn",
        type: "good",
        id : "4"
    },
    {
        img:"img/product/images.jpg",
        price: 300,
        name : "Kẹo chuối",
        type: "food",
        id : "5"
    },
    {
        img:"img/pexels-photo-4502965.jpeg",
        name : "Đĩa sứ",
        price:500,
        type: "good",
        id : "6"
    },
];
localStorage.setItem("product",JSON.stringify(listItem))
let main = document.querySelector(".main")
function showListItem (a){
    if(main){
        main.innerHTML = "";
        for(let i of a){
            
            main.innerHTML += `   <div class="image">
                                    <a href="learn-more.html?id=${i.id}"><img src="${i.img}" alt=""></a> 
                                    <p class="item-name">${i.name}</p>
                                    <p class="item-price">${i.price}.000</p>
        </div>`
        }
    }
}
showListItem(listItem)

let value = document.querySelector("#fill");

function checkType(){
    var good = listItem.filter(
        function (cate){
            return cate.type == "good"
        }
    )
    var food = listItem.filter(
        function (cate){
            return cate.type == "food"
        }
    )
    if(value.value == "food"){
        showListItem(food)
    }else if (value.value == "good"){
        showListItem(good)
    }else{
        showListItem(listItem)
    }
}

function product() {
    var _iden = new URLSearchParams(window.location.search).get('id');
    if (_iden) {
        var a = listItem.find(function (item) {
            return item.id == _iden;
        });
        var _detail = document.querySelector(".item");
        _detail.innerHTML += `
        <div class="image">
        <img src="${a.img}" alt=""></div>
        <div class="buy">
            <h1>${a.name}</h1>
            <h2>${a.price}.000 VND</h2>
            <button class="buy-now" onclick="buynow()">Mua ngay</button>
            <div class="line"></div>
            <div class="comment">
            <div class="input">
                <input class="message" type="text">
                <button class="submit" onclick="submit()">Gửi</button>
            </div>
            <div class="showCmt">
                
            </div>
        </div>
        </div>
        
        `;
    }
}
product();