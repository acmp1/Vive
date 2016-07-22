$(document).ready(function(){
    $("#bContacto").click(function(){
        var x=$("#contacto").offset();
        window.scrollTo(x.left, x.top);
    });
    $("#bPropiedades").click(function(){
        /*var element       = $("#propiedades");
        var elementHeight = element.height();
        var windowHeight  = $(window).height();

        var offset = Math.min(elementHeight, windowHeight) + element.offset().top;
        $('html, body').animate({ scrollTop: offset }, 500);*/
        $(window).scrollTop($('#propiedades').offset().top);
    });
    $("#bInicio").click(function(){
        $(window).scrollTop($('#dvideo').offset().top);
    });
    });
});