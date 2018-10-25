function onScroll(){
    var scrollPos = $(window).scrollTop()+70;
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.menu a').click(function() {
        $('.menu a').removeClass('active');
        $(this).addClass('active');
    });
    if($(".form-div").is("#search")){
        var top = $("#search").offset().top;
        var widthsearch = $("#search").outerWidth();
    }
    var heightfooter = $("#footer").height();
    var heighbody = $(window).height() - heightfooter;

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        // Show/hide menu on scroll
        if (scrollDistance >= 600) {
            $('.menu').removeClass('fullwidth');
            $('.menu').addClass('container fix');
        } else {
            $('.menu').removeClass('container fix');
            $('.menu').addClass('fullwidth');
        };
        if(scrollDistance >=heighbody || scrollDistance < top){
            $("#search").removeClass("stick");
            $("#search").css({"width":"100%"});
        }else{
            $("#search").addClass("stick");
            $("#search").css({"width":widthsearch});
        }
    });
});


