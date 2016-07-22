$(document).ready(function(){
    $("#bContacto").click(function(){
        //var x=$("#contacto").position();
        window.scrollTo("#contacto");
        $('#contacto').addClass('active');
    });
    $("#bPropiedades").click(function(){
        /*var element       = $("#propiedades");
        var elementHeight = element.height();
        var windowHeight  = $(window).height();

        var offset = Math.min(elementHeight, windowHeight) + element.offset().top;
        $('html, body').animate({ scrollTop: offset }, 500);*/
        $(window).scrollTop($('#propiedades').offset().top);
        $('#contacto').addClass('active');
    });
    $("#bInicio").click(function(){
        $(window).scrollTop($('#dvideo').offset().top);
        $('#contacto').addClass('active');
    });
    });
});
