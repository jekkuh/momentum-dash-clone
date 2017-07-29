$(document).ready(function(){
  console.log('App Running...');

  // Randomly set the background-image
  function setBackground() {

    // Background Images List
    var bgImage = [
      'url(https://images4.alphacoders.com/190/thumb-1920-19098.jpg)',
      'url(https://images4.alphacoders.com/395/thumb-1920-39516.jpg)',
      'url(https://images7.alphacoders.com/712/thumb-1920-712440.jpg)'
    ];

    // Get random number for array index
    var index = Math.floor(Math.random() * bgImage.length);

    // Set the background-image according to random index number
    $('body').css('background-image', bgImage[index]);

  }

  // Get name from User Input
  function getName(){
    console.log('Function Invoked !');

    // Get </input> tag
    var userInput = document.getElementById('userInput');

    // Get User Name
    var userName = userInput.value;

    console.log(userInput);
    console.log(userName);

    $('.user_input').fadeOut(500);
    $('.modal').fadeOut(1000);
    $('.main_content').fadeIn(3000);

  }

  // Set background
  setBackground();

  // Animate User Input text
  $('.user_input').fadeIn(3500);

  // On enter, get User Name and fade text out
  $('.modal').keypress(function(e) {
    if(e.which == 13){
      getName();
    }
  });

});





// Get random quote on refresh
