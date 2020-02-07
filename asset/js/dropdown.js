$(document).ready(function(){
    // umpetin down
    $(".lokasi ul").hide();
    // aksi
    $(".lokasi").click(function(){
    $(this).children("ul").slideToggle("fast");
    });
});