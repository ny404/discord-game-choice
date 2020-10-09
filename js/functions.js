function loadStatus() {
    // ID of the Google Spreadsheet
  var spreadsheetID = '1poYa0UrCWgFU4I39rJ1jg3twIAthc02SmvisUzgftN4';

  // Make sure it is public or set to Anyone with link can view
  var url =
    'https://spreadsheets.google.com/feeds/list/' +
    spreadsheetID +
    '/od6/public/values?alt=json';

  $.getJSON(url, function (data) {
    var entry = data.feed.entry;

    $(entry).each(function () {
      document.getElementById("currentGame").src=this.gsx$gamecover.$t;
      document.getElementById("pickedGame").innerHTML = "We're currently playing:";
      document.getElementById("gameTitle").innerHTML = this.gsx$gamename.$t;

    });
  });
}

function sendMessage(x,img) {
  document.getElementById("currentGame").src=img;
  document.getElementById("pickedGame").innerHTML = "We're currently playing:";
  document.getElementById("gameTitle").innerHTML = x;
  pushGoogle(x,img);
}

function pushGoogle (x,img) {
  var $form = $('#test-form'),
  url = 'https://script.google.com/macros/s/AKfycbx4BdjHxhMz26U4jKmmUaXtvOTdkUwy3rtKDNuD3irFedamtREa/exec'


  $('#test-form').on('submit', function(e) {
    document.getElementById("selectedCover").value=img;
    document.getElementById("selectedGame").value = x;
   e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: $form.serialize()
    }).success();
  })
}

function searchFilter() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchGames');
  filter = input.value.toUpperCase();
  game = document.getElementsByClassName('game');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < game.length; i++) {
    a = game[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      game[i].style.display = "";
    } else {
      game[i].style.display = "none";
    }
  }
}