let listItem = [
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"400",
        name : "Khay mứt kẹo tết",
        type: "good",
        id : "1"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        name :"Kẹo ngô",
        price:"400",
        type: "food",
        id : "2"
    },
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"300",
        name : "Kẹo dứa",
        type: "food",
        id : "3"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        price:"420",
        name: "Khăn trải bàn",
        type: "good",
        id : "4"
    },
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"400",
        name : "Kẹo chuối",
        type: "food",
        id : "5"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        name : "Đĩa bầu dục bằng sứ",
        price:"400",
        type: "good",
        id : "6"
    },
];
let main = document.querySelector(".main")
function showListItem (a){
    if(main){
        main.innerHTML = "";
        for(let i of a){
            
            main.innerHTML += `   <div class="image">
                                    <a href="learn-more.html?id=${i.id}"><img src="${i.img}" alt=""></a> 
                                    <p>${i.name}</p>
                                    <p>${i.price}$</p>
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
            <h2>${a.price}k VND</h2>
            <button class="buy-now" onclick="buynow()">Mua ngay</button>
        </div>
        
        `;
    }
}
product();