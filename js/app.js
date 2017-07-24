$(document).ready(function(){
  console.log('App Running...');

  // Randomly set the background-image
  function setBackground() {

    // Background Images List
    var bgImage = [
      'url(https://d3cbihxaqsuq0s.cloudfront.net/images/53414818_xl.jpg)',
      'url(https://farm5.staticflickr.com/4274/34525384820_d58d1755b4_k.jpg)',
      'url(https://cdn.pixabay.com/photo/2017/06/27/07/34/tea-2446522__340.jpg)'
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

    $('body').fadeIn('slow').addClass('bg');
    $('.user_input').fadeOut(500);
    $('.modal').fadeOut(2500);

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
