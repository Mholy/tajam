$(document).ready(function() {

    $(".btn-cross").hide();
    $(".btn-hamburger").click(function() {
        $(".header-menu").slideToggle("slow", function() {
            $(".btn-hamburger").hide();
            $(".btn-cross").show();
        });
    });

    $(".btn-cross").click(function() {
        $(".header-menu").slideToggle("slow", function() {
            $(".btn-cross").hide();
            $(".btn-hamburger").show();
        });
    });

});
