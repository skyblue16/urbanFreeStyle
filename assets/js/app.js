$(function () {
    setTimeout(function () {
        $('#splash').fadeOut(500);
    }, 2000);
});

$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput').focus()
})