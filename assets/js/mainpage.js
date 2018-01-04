$(document).ready(function(){
    
    $('.slider li').hide();

    $('.slider li:first').show();

//Función para que el slide sea automático, cada 3 segundos ejecutará la función de nextSlider
    setInterval(function(){
        nextSlider();
    }, 4000);


});