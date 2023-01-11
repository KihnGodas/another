let listItem = [
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"400",
        name : "a",
        type: "food",
        id : "1"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        name :"b",
        price:"400",
        type: "good",
        id : "2"
    },
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"400",
        name : "c",
        type: "food",
        id : "3"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        price:"400",
        name: "d",
        type: "good",
        id : "4"
    },
    {
        img:"/img/product/meo-vang-chon-mut-va-banh-keo-an-toan-ngay-tet-thumb-620x620.jpg",
        price:"400",
        name : "e",
        type: "food",
        id : "5"
    },
    {
        img:"/img/product/982781e728cd54ec174a218e7fc99396.jpg",
        name : "f",
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
            
            main.innerHTML += `  <div class="product" class="food">
                                <img src="${i.img}" alt="">
                                <p>${i.name}</p>
                                <p>${i.price}</p>
                                <a href="/learn-more.html"><button>Xem thêm </button></a>
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

function product(){
    var iden = new URLSearchParams(window.location.search).get("id");
    console.log(iden);
}
