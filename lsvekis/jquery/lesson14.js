$("#b1").click(function(){
    $("#h1").fadeIn(3000,function(){
        console.log("Faded in");
    });
})
$("#b2").click(function(){
    $("#h1").fadeOut(3000,function(){
        console.log("Faded Out");
    });
})
$("#b3").click(function(){
    $("#h1").fadeToggle(100,function(){
        console.log("Faded was toggled");
    });
})
$("#b4").click(function(){
    console.log("Fading to 2000");
    
    $("#h1").fadeTo(2000,0.2);
    
})

