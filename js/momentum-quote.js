function updateFocus() {

  // Get Focus Input
  var input = document.getElementById('userInput');

  console.log(input);

}

function showQuote() {
  var quotes = [
              "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time. ^Steve Jobs",

              "Strive not to be a success, but rather to be of value. ^Albert Einstein",

              "I attribute my success to this: I never gave or took any excuse. ^Florence Nightingale",

              "As for me, all I know is that I know nothing. ^Socrates",

              "Things don’t have to change the world to be important. ^Steve Jobs",

              "Success is never final, failure is never fatal. It’s courage that counts. ^John Wooden",

               "Life isn’t about getting and having, it’s about giving and being. ^Kevin Kruse",

               "Life is what happens to you while you’re busy making other plans. ^John Lennon",

              "We become what we think about. ^Earl Nightingale",

              "TDo not let what you cannot do interfere with what you can do.. ^John Wooden",

              "Life is 10% what happens to me and 90% of how I react to it. ^Charles Swindoll"];

  var index = Math.floor(Math.random() * (quotes.length + 1));
  var entry = quotes[index];
  entry = entry.split('^');
  $("#quoteContainer").empty();
  $("#quoteContainer").html("<div><p class='quote'>" + entry[0] + "</p><p class='quote author'>– " + entry[1] + "</p></div>");

}

/* Add random Quote on refresh */
$(document).ready(function() {
  $('body').keypress(function(e) {
    if(e.which == 13) {
      updateFocus();
    }
  });
  showQuote();
});
