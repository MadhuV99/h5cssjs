
$("h1").click(function(){
    console.log("clicked");
    $("h1").text("Clicked");
});

$("li").click(function(){
    console.log("clicked");
    $(this).text("Clicked");
    $(this).toggleClass("red");
});
