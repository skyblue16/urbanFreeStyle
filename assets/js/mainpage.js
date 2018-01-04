$(document).ready(function(){
    
    /* Creamos una variable para hacer que cada círculo de la barra aparezca de acuerdo al número de Slider */
    var imgItems = $('.slider li').length;
    /* creamos una variable donde le daremos a la imagen la posición 1 (siempre al cargar la página mostrará la primera imágen)*/
    var imgPos = 1;

        /* iteramos en la variable imgItems */
        for(i= 1; i <= imgItems; i++){
            /*Agregamos elementos a la etiqueta pagination (lista <ol>) */
        $('.pagination').append('<li><span class ="fa fa-circle"></span></li>');
        }
    //Funciones que se ejecutan una vez cargada la página
    /* Primero escondemos todas las imágenes */
    $('.slider li').hide();
    /* Luego solo dejamos visualizar la primera imágen del carrusel*/
    $('.slider li:first').show();
    /* Damos estilo para el primer ítem circular de nuestra barra */
    $('.pagination li:first').css({'color': '#CD6E2E'});

    //Función al dar click a cada paginación debe mostrar el slide correspondiente
    $('.pagination li').click(pagination);
    //Función al darle click a las flechas deben mover los slide
    /* Flecha para slide siguiente */
    $('.right span').click(nextSlider);
    /* Flecha para slide anterior */
    $('.left span').click(prevSlider);
    //Función para que el slide sea automático, cada 3 segundos ejecutará la función de nextSlider
    setInterval(function(){
        nextSlider();
    }, 3000);

    //Desarrollo de funciones
    function pagination(){
        /* Creamos una variable que trae la posición de el slide específico */
        var paginationPos = $(this).index() + 1;
        /* Al darle click al circulo debe aparecer el slide correspondiente */
        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();
        /* Le damos color a los circulos dependiendo del que esté clickeado */
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});
        /* Con esto nos aseguramos que al presionar las flechas la imagen no se devuelva al 1 o se quede pegado */
        imgPos = paginationPos;

    }

    function nextSlider(){
        /* realizamos una condicional para que cuando se llegue a la ultima imágen está vuelva a la imagen primera */
        if(imgPos>= imgItems){
            imgPos = 1;
        } else{
            imgPos++ ;
        }

        /* Le damos color a los circulos dependiendo del slide mostrado */
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#CD6E2E'});

        /* Al darle click a la flecha "siguiente" debe aparecer el slide correspondiente */
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();

    }

    function prevSlider(){
        /* realizamos una condicional para que cuando se llegue a la ultima imágen está vuelva a la imagen primera */
        if(imgPos <= 1){
            imgPos = imgItems;
        } else{
            imgPos-- ;
        }

        /* Le damos color a los circulos dependiendo del slide mostrado */
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#CD6E2E'});

        /* Al darle click a la flecha "siguiente" debe aparecer el slide correspondiente */
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();

    }

    
});