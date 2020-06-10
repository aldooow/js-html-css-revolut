$(document).ready(
  function(){
    $('.with-dropdown').click(
      function(){
        $(this).children('.dropdown').toggleClass('open');
      }

    )
  }
);
