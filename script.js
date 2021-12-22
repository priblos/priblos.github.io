$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Designer", "Developer", "Blogger", "Gamer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var $Links = $('header .list a , footer .links_ a , .logo__img a , .top');
    var $Link = $('header .navigation .list');

    $Links.click(function(event){
        event.preventDefault();

        $Links.removeClass('active')
        let id = $(this).addClass('active').attr('href');
        let target = $(id).offset().top -130;

        $('html,body').animate({
            scrollTop:target,
        },500)
    })
    $(window).on('scroll load' , function(){
        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    })
    
}); 
