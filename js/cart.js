let close = document.querySelectorAll(".button");
let product = document.querySelectorAll(".product");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        product[i].innerHTML = "";
        
    }
}
