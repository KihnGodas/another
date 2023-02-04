let main = document.querySelector(".main");
let arr2 = JSON.parse(localStorage.getItem("userCart"));

if(main){
    for(let i of arr2){
        main.innerHTML += ` <div class="product">
        <div class="price">
            <h2>${i.name}</h2>
            <p>${i.price}$</p>
        </div>
        <div class="container">
            
            <button class="button"><i class='bx bx-x'></i></button>
        </div>
    </div>`;

    }
}
let close = document.querySelectorAll(".button");
let product = document.querySelectorAll(".product");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        product[i].innerHTML = "";
        arr2.splice(i, 1);
        localStorage.setItem("userCart",JSON.stringify(arr2))
    }
}

