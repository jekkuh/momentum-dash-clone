$(document).ready(function(){
  console.log('App Running...');

  // Randomly set the background-image
  function setBackground() {

    // Background Images List
    var bgImage = [
      'url(https://d3cbihxaqsuq0s.cloudfront.net/images/53414818_xl.jpg)',
      'url(https://farm5.staticflickr.com/4274/34525384820_d58d1755b4_k.jpg)',
      'url(https://az814671.vo.msecnd.net/fullsize/bc02cd92-13e1-4bc3-8020-b0acf5c80880.jpg)'
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

  function addFocus() {

    // Get </input> tag
    var focusInput = document.getElementById('focusInput');

    var focusText = focusInput.value;

    $('.focus_content').fadeOut(500);

    $('#focusList').append('<li>' + focusText + '</li>');

    $('.focus_content_list').fadeIn(3000);

    console.log(focusInput);
    console.log(focusText);
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

  var once = true;

  $('.main_content').keypress(function(e) {
    if(e.which == 13){
      if(once) {
          addFocus();
          once = false;
      }
    }
  });

});





// Get random quote on refresh
