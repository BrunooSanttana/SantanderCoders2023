$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Função para alternar entre o modo light e dark
    function toggleDarkMode() {
        $("body").toggleClass("dark-mode");
        
        var button = $("#toggle-dark-mode");
        if ($("body").hasClass("dark-mode")) {
            button.text("White Mode");
        } else {
            button.text("Dark Mode");
        }
    }
    
    // Evento de clique no botão para alternar o modo
    $("#toggle-dark-mode").click(function () {
        toggleDarkMode();
    });
});
