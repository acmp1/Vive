$(document).ready(function(){
    $("#bContacto").click(function(){
        //var x=$("#contacto").position();
        window.scrollTo("#contacto");
        $('.mainheader nav ul li #contacto').addClass('active');
    });
    $("#bPropiedades").click(function(){
        /*var element       = $("#propiedades");
        var elementHeight = element.height();
        var windowHeight  = $(window).height();

        var offset = Math.min(elementHeight, windowHeight) + element.offset().top;
        $('html, body').animate({ scrollTop: offset }, 500);*/
        $(window).scrollTop($('#propiedades').offset().top);
        $('.mainheader nav ul li #propiedades').addClass('active');
    });
    $("#bInicio").click(function(){
        $(window).scrollTop($('#dvideo').offset().top);
        $('.mainheader nav ul li #dvideo').addClass('active');
    });
    });
});
