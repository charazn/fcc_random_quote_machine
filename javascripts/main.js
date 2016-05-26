$(document).ready(function() {
  qoutetext = "";
  qouteauthor = "";
  fetchQuote();

  $("#getQuote").on("click", function() {
    fetchQuote();
  });

  $("#tweetQuote").on("click", function() {
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + quotetext + " Author: " + quoteauthor
    window.open(tweetUrl);
    return false;
  });

  function fetchQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(json) {
      quotetext = json.quoteText.trim();
      if (json.quoteAuthor === '') {
        quoteauthor = 'Unknown';
      } else {
        quoteauthor = json.quoteAuthor.trim();
      }
      $("#quoteText").html('"' + quotetext + '"');
      $("#quoteAuthor").html('- ' + quoteauthor);
    });
  };
});
