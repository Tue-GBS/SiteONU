$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true, // Define se o carrossel deve fazer um loop infinito
      margin: 20, // Espaçamento entre os cards
      responsiveClass: true,
      responsive: {
        0: {
          items: 1, // Número de itens a serem exibidos em telas menores que 600px
        },
        600: {
          items: 2, // Número de itens a serem exibidos em telas maiores ou iguais a 600px
        },
        1000: {
          items: 3, // Número de itens a serem exibidos em telas maiores ou iguais a 1000px
        }
      }
    });
  });
  