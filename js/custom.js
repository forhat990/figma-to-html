jQuery(document).ready(function () {
    jQuery(".dropdown-menu").niceScroll({
      cursorcolor:"#4389f3",
      cursorwidth:"10px"
    });
});
jQuery(document).ready(function () {
    jQuery("#myTab a").click(function(e){
        e.preventDefault();
        jQuery(this).tab('show');
    });
});
jQuery('#slider').flexslider({
    animation: "slide",
    controlNav: true, 
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 2000,
    start: function(slider){
        jQuery('body').removeClass('loading');
    }
});
