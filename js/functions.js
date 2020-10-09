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
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/762084461092798494/3h6pWBiM9JW94CKIMBreK9dHpEO7AZyE9XCLDVg12xcZG1EGz19uSUw9BCqLuea9Mb6H");
  //request.open("POST", "https://discord.com/api/webhooks/761769489011572757/j15L3vep7P6xhWs6DYxLslDHtLg86sJg6Vqb3MZY1KDxFdBU3H1mncn994zdAzZj4XZE");
  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    "username": "La Crew",
    "embeds": [{
      "title": "Game Status",
      "color": "52479",
      "image": { 
        "url": img 
      },
      "description": "We're currently playing " + x + "!"
    }]
  }

  request.send(JSON.stringify(params));
  document.getElementById("currentGame").src=img;
  document.getElementById("pickedGame").innerHTML = "We're currently playing:";
  document.getElementById("gameTitle").innerHTML = x;
  document.getElementById("selectedCover").value=img;
  document.getElementById("selectedGame").value = x;
  pushGoogle(x,img);
}

function pushGoogle (x,img) {
  var $form = $('#set-status'),
  url = 'https://script.google.com/macros/s/AKfycbx4BdjHxhMz26U4jKmmUaXtvOTdkUwy3rtKDNuD3irFedamtREa/exec'


  $('#set-status').on('submit', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: $form.serializeArray()
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