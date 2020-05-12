$(function(){
    var header = document.getElementById ('header');
    var headroom = new Headroom (header);
    headroom.init();

    //menu responsivo
    //ancho página
    var ancho = $(window).width(),
        paginas = $('#paginas'),
        botonMenu = $('#botonmenu'),
        icono = $('#botonmenu .icono');

        if(ancho < 768){
            paginas.hide();
            icono.addClass('fa-bars');
        }

        botonMenu.on('click', function(e){
            paginas.slideToggle();
            icono.toogleClass('fa-bars');
            icono.toogleClass('fa-times');
        });

        $(window).on ('resize', function (){
            if($(this).width() > 768){
                paginas.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            } else{
                paginas.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }

        });
});

