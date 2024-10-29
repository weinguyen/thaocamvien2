$(function () {
    let li = $('.img-li');
    let leng = li.length;
    let i = 0;

    function feiru() {
        if (i < leng) {
            if (i % 2 !== 0) {
                li.eq(i).css({ opacity: 0, left: '-300px' }).show();
                li.eq(i).animate({ left: '60%', opacity: 1 }, 1000)
                    .delay(2000)
                    .animate({ opacity: 1 }, 1000, function () {
                        i++;
                        feiru();
                    });
            } else {
                li.eq(i).css({ opacity: 0, right: '-300px' }).show();
                li.eq(i).animate({ right: '60%', opacity: 1 }, 1000)
                    .delay(2000)
                    .animate({ opacity: 1 }, 1000, function () {
                        i++;
                        feiru();
                    });
            }
        } else {
            $('.begin').html('<a href="BirthdayCake.html" style="text-decoration: none;color: #fff;background: #cd9472;display: inline-block;padding: 10px;border: 2px solid #fff;">Về Menu</a>');
            $('.begin').fadeIn();
        }
    }

    let beg = $('.begin');
    beg.click(function () {
        $(this).hide();
        $('audio')[0].play();
        feiru();
    });
});
