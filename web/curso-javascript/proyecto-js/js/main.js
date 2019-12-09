$(document).ready(function(){
    
    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    }

    //Post
    if(window.location.href.indexOf('index') > -1){
        var post = [
            {
                title: 'Prueba de titulo',
                date: 'Fecha de publicación: ' + moment().format("MMM dddd YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            },
            {
                title: 'Prueba de titulo 1',
                date: 'Fecha de publicación: ' + moment().format("MMM dddd YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Fecha de publicación: ' + moment().format("MMM dddd YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Fecha de publicación: ' + moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Fecha de publicación: ' + moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Fecha de publicación: ' + moment().format("MMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis sem hendrerit, euismod nisl a, ultricies leo. Sed eleifend felis ut diam lacinia, vitae porttitor erat pellentesque. Donec ac condimentum nibh, non sagittis ex. In cursus interdum augue, at scelerisque augue sodales sollicitudin. Donec varius ante nec tempus sollicitudin. Nam a orci sit amet justo eleifend vestibulum. Duis aliquam dignissim tincidunt. Aenean enim velit, dapibus ac fringilla lacinia, semper in diam. Duis mauris velit, maximus non euismod lobortis, pellentesque in purus. Aenean sit amet accumsan neque. Proin ac pretium libero. Nunc porta leo sed rhoncus vestibulum. Mauris et massa ac arcu rhoncus pulvinar a accumsan quam. Quisque porttitor nisl vitae orci bibendum sagittis. Integer tincidunt aliquam nisl ut venenatis. Ut feugiat vel risus eget facilisis. Donec dapibus malesuada urna, pretium laoreet massa facilisis ac. Nunc magna nunc, malesuada at tortor commodo, condimentum aliquet diam. Duis lorem arcu, dignissim at sem porta, varius malesuada ipsum.'
            }
        ];

        post.forEach((item, index) => {
            var post = `
                <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                </article>
                `;

                $("#post").append(post);
        });
    }

    //Selector de tema
    var theme = $("#theme"); // hoja de estilos incluidas en el index.html

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba
    $('.subir').click(function(){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong><br>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
       
    }

    //Validacion formulario contacto
    if(window.location.href.indexOf('contacto') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});