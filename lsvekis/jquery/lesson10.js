
$(document).ready(function(){
     $("h1").mouseenter(function(){
        console.log("Mouse Enter");
        $(this).addClass("red");
    })
    $("h1").mouseout(function(){
        console.log("Mouse Leave");
        $(this).removeClass("red");
    })
})


$("h1").on("click",function(){
    console.log("Clicked");
})
/*
$("h1").on("mouseenter",function(){
    console.log("Mouse Enter");
    $(this).addClass("red");
})
$("h1").on("mouseleave",function(){
    console.log("Mouse Leave");
    $(this).removeClass("red");
})
*/