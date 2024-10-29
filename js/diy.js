$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
       
    });
})
setTimeout(function () {
    $('.button-style1').animate({
        opacity: "1",
        top: "50%"
    }, 1500);
    $('.button-style2').animate({
        opacity: "1",
        top: "80%"
    }, 2000);
}, 9000);

$(window).click(function () {
    $('audio')[0].play();
});

;