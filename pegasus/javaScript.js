$(function () {
    $('.menuToggle').on('click', function () {
        $('.menu').slideToggle(300, function () {

            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

/*устройства с коэф, отличным от масштабирования 1*/
// if (window.devicePixelRatio !== 1) {
//     var dpt = window.devicePixelRatio;
//     var widthM = window.screen.width * dpt;
//     var widthH = window.screen.height * dpt;
//     document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
// }
