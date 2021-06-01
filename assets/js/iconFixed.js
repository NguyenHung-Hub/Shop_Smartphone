const toTop = document.querySelector(".btnGoTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

$(document).ready(function () {
    $("#message-icon").click(function () {
        $("#message-box").css("display", "block");
        // console.log("dfghjkdh")
    })

    $("#close-mesage-btn").click(function () {
        $("#message-box").css("display", "none");
        
    })
    $("#send-message-btn").click(function () {
        $("#message-box").css("display", "none");
        alert("Đã gửi tin nhắn")

        $("#txtCustomer").val("");
        $("#txtCustomerPhone").val("");
        $("#txtMessage").val("");
    })
     
});