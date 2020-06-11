$(document).ready(


  function(){
    // Click nel "document" per nascondere le opzioni. *
    $(document).click(
      function(){
        $('.dropdown').removeClass('open');
      }
    );

    // Click su .... , per aprire le opzioni
    $('.with-dropdown').click(
      function(){
        // ".siblings" --> prende i fratelli di un elemento.
        $('.dropdown.open').siblings().removeClass('open');
        $(this).children('.dropdown').toggleClass('open');
      }
    );

    // Mouse Enter
    $('.with-dropdown').mouseenter(
      function(){
        $('.dropdown.open').removeClass('open');
        $(this).children('.dropdown').toggleClass('open');

      }
    );

    // Mouse Leave... (X) In questo caso NO!!!

  }

);
