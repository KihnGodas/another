let loger = JSON.parse(localStorage.getItem("now"));
let cmtBox = document.querySelector(".showCmt");

function submit() {
    let message = document.querySelector(".message").value;
    let showCmt = document.querySelector(".showCmt");
    console.log(message);
    if (showCmt) {
        if (loger == null) {
            alert("Bạn vui lòng đăng nhập để tiếp tục bình luận")
        }else if(message == "")(
            alert("Bạn vui lòng nhập ý kiến của bạn")
        )
         else {
            showCmt.innerHTML += ` <div class="cmt">
                                 <h5>${loger.userName}</h5>
                                 <p>${message}</p>
                             </div>`}
    }
}