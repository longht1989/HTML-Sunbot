$(function() {
    $(".close-btn").click(function() {
        $("#area4").hide();
        $("#area5").hide();
        $("body").removeClass("fixed");
    });
    $('.area__clickable-01 .area__button').click(function() {
        $("body").addClass("fixed");
        $("#area4").show();
    });
    $('.area__clickable-02 .area__button').click(function() {
        $("body").addClass("fixed");
        $("#area5").show();
    });
});