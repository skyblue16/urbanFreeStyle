$(function () {
    setTimeout(function () {
        $('#splash').fadeOut(500);
    }, 2000);
});

$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput').focus()
})
$("#botonSeguir").click(function () {
    $("#botonSeguir").html("Seguido")
    $(".seguidos ").html("143")
});
$("#botonSeguir").dblclick(function () {
    $("#botonSeguir").html("Seguir")
    $(".seguidos ").html("142")
});
$(".naturaleza").click(function () {
    $(".colecciones").show()
    
});
$(".naturaleza").dblclick(function () {
    $(".colecciones").hide()
});
