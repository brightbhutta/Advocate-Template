jQuery(document).ready(function(){
"use strict";

/*=================== Header Search ===================*/   
$(".header-search span").on("click", function(){
    $(".header-search-form").fadeIn();
});
$("html").on("click", function(){
    $(".header-search-form").fadeOut();
});
$("header").on("click", function(e){
    e.stopPropagation();
});


/*=================== Responsive Menu ===================*/  
$(".responsive-menu > span.open-menu").click(function(){
    $(this).next(".menu-links").toggleClass("slide");
    $("body").toggleClass("move");
    $(".responsive-menu .menu-links > ul li.menu-item-has-children ul").slideUp();    
});
$(".responsive-menu .menu-links > ul li.menu-item-has-children > a").click(function(){
    $(this).next("ul").slideToggle();
    return false;
});
$("html").click(function(){
    $(".responsive-header .menu-links").removeClass("slide");
    $("body").removeClass("move");
});
$(".responsive-menu > span.open-menu,.responsive-menu .menu-links > ul li.menu-item-has-children a").click(function(e){
    e.stopPropagation();
});
$(".responsive-menu > span.show-topbar").click(function(){
    $(this).parent().parent().find(".topbar").slideToggle();
    $(this).toggleClass("slide");
});

/*=================== STICKY HEADER ===================*/ 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
}); 

var menu_height = $("header").height();
if ($("header").hasClass("stick")){
    $(".theme-layout").css({"padding-top":menu_height})
}
else {
    $("theme-layout").css({"margin-bottom":"0"})
}

/*=================== Theme Tabs ===================*/   
var img_height = $(".theme-tabs .tab-content").find(".fade.active.in .tab-img img").height();   
$(".theme-tabs .nav").css({
    "top":img_height
});
$(".theme-tabs .nav li a").click(function() { setTimeout(function() { 
	var img_height = $(".theme-tabs .tab-content").find(".fade.active.in .tab-img img").height();	
	$(".theme-tabs .nav").css({
		"top":img_height
	});
}, 500); });

/*=================== Accordion ===================*/   
$(function() {
$('.toggle .content').hide();
$('.toggle h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
$('.toggle h2').click(function() {
    if($(this).next().is(':hidden')) {
        $('.toggle h2').removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
        $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
    }
});
});



/*=================== Ajax Contact Form ===================*/  
$('.submit').on('click',function(){
    var button_id = $(this).attr('id');
    var form = $(this).parent().parent().parent();
    var action = $(form).attr('action');
    var msg = $(form).prev();
    var _name = $(form).find('input[name="name"]').val();
    var _email = $(form).find('input[name="email"]').val();
    var _comments = $(form).find('textarea[name="comments"]').val();
    /*$(msg).empty();
        $(this)
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');*/

    $.post(action, {
        name: _name,
        email: _email,
        comments: _comments,
    },
        function(data){
            $(msg).html(data);
            $(msg).slideDown('slow');
            //$(form + 'img.loader').fadeOut('slow',function(){$(this).remove()});
            $(this).removeAttr('disabled');
            if(data.match('success') != null) $(form).slideUp('slow');

        }
    );

    return false;
});


/*=================== Pretty Photo ===================*/  
jQuery("body a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "facebook",
});




});/*=== Document.Ready Ends Here ===*/ 		

jQuery(window).load(function(){
"use strict";

$('.parallax').scrolly({bgParallax: true});


});/*=== Window.Load Ends Here ===*/ 		
