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
$("#b3").click(function(){
    console.log('Clicked button 3');
    var url = "http://my-json-server.typicode.com/discoveryvip/demo/posts/";
    var myData = $("#myForm").serialize();
    console.log(myData);
      $.post(url, myData).done(function(data){
       console.log(data);
      })
   })
    
   $("#myForm").submit(function(e){
       e.preventDefault();
       console.log("submit");
       var myData = $("#myForm").serialize();
       console.log(myData);
       var url = "http://my-json-server.typicode.com/discoveryvip/demo/posts/";
       $.ajax({
           url:url,
           type:"post",
           data:myData,
           success:success
       })
   })
    
   function success(data){
       console.log(data);
   }
