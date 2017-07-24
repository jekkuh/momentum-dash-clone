$(document).ready(function(){
  console.log('App Running...');

  $('.user_input').fadeIn(1500);

  function getName(){
    console.log('Function Invoked !');
    // Get </input> tag
    var userInput = document.getElementById('userInput');
    // Get User Name
    var userName = userInput.value;

    console.log(userInput);
    console.log(userName);

    $('body').fadeIn('slow').addClass('bg');
    $('.user_input').fadeOut();

  }

  $(document).keypress(function(e) {
    if(e.which == 13){
      getName();
    }
  });

});
