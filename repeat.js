window.addEventListener('scroll', function(e) {
        if( $(window).scrollTop() <= 50) {
            $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
            new WOW().init();
        }
});

// $(".shivam").on("click",function(){
//   $(".shivam").addClass("wow bounceIn animated").one("animationend",function(){
//     $(this).removeClass("wow bounceIn animated");
//   });
// });
