/*
$(".btn").click(function () {
    $("h1").text($(this).val());
})
*/ 
$(".btn:first").click(function () {
    $("h1").text('test1');
})
$(".btn:eq(1)").click(function () {
    $("h1").text('test2');
})
$(".btn:nth-child(4)").click(function () {
    $("h1").text('test3');
})
$(".btn:last").click(function () {
    $("h1").text('test4');
})

