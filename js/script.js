$(document).ready(

  function(){
    $('.with-dropdown').mouseenter(
      function(){
        $(this).children('.dropdown').toggleClass('open');
        $('.dropdown').removeClass('open')
      }
    )

    $('.with-dropdown').click(
      function(){
        $(this).children('.dropdown').toggleClass('open');
      }
    )
  }


);
