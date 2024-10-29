$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "thaocamvien" && pwd == "meomeomeo") {
        $('#h').text("Đăng nhập thành công").css('color', 'black');
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 2000);
    } else {
        alert("Sai rồi lại đê");
    }
});
