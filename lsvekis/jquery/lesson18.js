//var url = "https://api.myjson.com/bins/u63ki";
const url = "https://jsonplaceholder.typicode.com/users";
$("#b1").click(function(){
    $.get(url,function(response){
        console.log(response);
        $("h1").text(response[0].name);
    })
})
$("#b2").click(function(){
    $("#output").load("/newpage.html");
})
