//celeb fav movie arrays
var amyAdams = ["The Apartment", "Vertigo", "Breakfast at Tiffany’s", "Grease", "Gone with the Wind"];

var kristenBell = ["The Apartment", "The Last King of Scotland", "When Harry Met Sally", "National Lampoon's Christmas Vacation", "Fletch"];

var emilyBlunt = ["Jaws", "Kramer vs. Kramer", "Princess Bride", "One Flew Over the Cuckoo's Nest", "The Lives of Others"];

var michaelCaine = ["Casablanca", "The Third Man", "The Treasure of the Sierra Madre", "Charade", "The Maltese Falcon"];

var charlizeTheron = ["I Could Go on Singing"];

var bradleyCooper = ["The Shop Around the Corner", "The Conversation", "The Diving Bell and the Butterfly", "The Celebration", "Life Lessons"];

var rosarioDawson = ["Resovoir Dogs", "The Misfits", "Network", "Killer of Sheep", "Man on Wire"]

var johnnyDepp = ["The Wizard of Oz"];

var djimonHounsou = ["Raging Bull", "Lawrence of Arabia", "The Bridge on the River Kwai", "The Usual Suspects", "Taxi Driver"]

var danielRadcliffe = ["12 Angry Men", "A Matter of Life and Death", "Dr. Strangelove", "Little Miss Sunshine", "Jason and the Argonauts"]

var drewBarrymore = ["Harold and Maude", "Paper Moon", "Annie Hall"];

var aaronEckhart = ["Apocalypse Now", "Five Easy Pieces", "The Getaway", "Bringing Up Baby", "Midnight Express"];

var jamesFranco = ["Gimme Shelter", "My Own Private Idaho", "Bicycle Thieves", "4 Months, 3 Weeks and 2 Days", "The Wrestler"]

var garyOldman = ["Apocalypse Now", "The Conversation", "The Godfather Part II", "Badlands",
  "Ratcatcher"]

var tomHanks = ["2001: A Space Odyssey", "The Godfather", "The Godfather Part II", "Fargo",
  "Elephant"]

var jasonStatham = ["Cool Hand Luke", "The Godfather", "Butch Cassidy and the Sundance Kid", "The Sting", "Enter the Dragon"]

var robLowe = ["Goodfellas", "Network", "The Natural", "Caddyshack", "The Godfather", "Apocalype Now", "Jaws"];

var johnMalkovich = ["The Battle of Algiers", "Abraham Valley", "Night Train to Munich", "The Conformist", "Elite Squad"];

var jamesMcAvoy = ["The Goonies", "Brief Encounter", "My Wife is An Actress", "The Great Escape", "Back to the Future"];

var morganFreeman = ["King Kong", "High Noon", "Moulin Rouge", "The Outlaw Josey Wales", "Moby Dick"]

var elizabethOlsen = ["Roman Holiday"];

var salmaHayek = ["Willy Wonka & the Chocolate Factory"];

var amySchumer = ["Jesus's son", "Shortcuts", "Royal tenenbaums", "Best in show", "City of God", "Personal Velocity", "The big Lebowski"]

var vinDiesel = ["Gone with the Wind"];

// function to make request for posters based on celeb's favorite movies
function amyCall() {
  var RandomNumber = Math.floor((Math.random() * amyAdams.length - 1) + 1);
  var RandomMovie = amyAdams[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#adamsBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function kristenCall() {
  var RandomNumber = Math.floor((Math.random() * kristenBell.length - 1) + 1);
  var RandomMovie = kristenBell[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#bellBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function emilyCall() {
  var RandomNumber = Math.floor((Math.random() * emilyBlunt.length - 1) + 1);
  var RandomMovie = emilyBlunt[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#bluntBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function michaelCall() {
  var RandomNumber = Math.floor((Math.random() * michaelCaine.length - 1) + 1);
  var RandomMovie = michaelCaine[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#cainBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function charlizeCall() {
  var RandomNumber = Math.floor((Math.random() * charlizeTheron.length - 1) + 1);
  var RandomMovie = charlizeTheron[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#charlizeBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function bradleyCall() {
  var RandomNumber = Math.floor((Math.random() * bradleyCooper.length - 1) + 1);
  var RandomMovie = bradleyCooper[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#coopBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function rosarioCall() {
  var RandomNumber = Math.floor((Math.random() * rosarioDawson.length - 1) + 1);
  var RandomMovie = rosarioDawson[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#dawsonBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function johnnyCall() {
  var RandomNumber = Math.floor((Math.random() * johnnyDepp.length - 1) + 1);
  var RandomMovie = johnnyDepp[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#deppBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function djimonCall() {
  var RandomNumber = Math.floor((Math.random() * djimonHounsou.length - 1) + 1);
  var RandomMovie = djimonHounsou[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#djimonBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function danielCall() {
  var RandomNumber = Math.floor((Math.random() * danielRadcliffe.length - 1) + 1);
  var RandomMovie = danielRadcliffe[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#radcliffeBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function drewCall() {
  var RandomNumber = Math.floor((Math.random() * drewBarrymore.length - 1) + 1);
  var RandomMovie = drewBarrymore[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#barrymoreBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function aaronCall() {
  var RandomNumber = Math.floor((Math.random() * aaronEckhart.length - 1) + 1);
  var RandomMovie = aaronEckhart[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#eckhartBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function jamesCall() {
  var RandomNumber = Math.floor((Math.random() * jamesFranco.length - 1) + 1);
  var RandomMovie = jamesFranco[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#francoBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function garyCall() {
  var RandomNumber = Math.floor((Math.random() * garyOldman.length - 1) + 1);
  var RandomMovie = garyOldman[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#oldmanBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function tomCall() {
  var RandomNumber = Math.floor((Math.random() * tomHanks.length - 1) + 1);
  var RandomMovie = tomHanks[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#hanksBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function jasonCall() {
  var RandomNumber = Math.floor((Math.random() * jasonStatham.length - 1) + 1);
  var RandomMovie = jasonStatham[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#stathamBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function robCall() {
  var RandomNumber = Math.floor((Math.random() * robLowe.length - 1) + 1);
  var RandomMovie = robLowe[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#loweBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function johnCall() {
  var RandomNumber = Math.floor((Math.random() * johnMalkovich.length - 1) + 1);
  var RandomMovie = johnMalkovich[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#malkovichBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function mcAvoyCall() {
  var RandomNumber = Math.floor((Math.random() * jamesMcAvoy.length - 1) + 1);
  var RandomMovie = jamesMcAvoy[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#mcavoyBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function morganCall() {
  var RandomNumber = Math.floor((Math.random() * morganFreeman.length - 1) + 1);
  var RandomMovie = morganFreeman[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#freemanBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function elizabethCall() {
  var RandomNumber = Math.floor((Math.random() * elizabethOlsen.length - 1) + 1);
  var RandomMovie = elizabethOlsen[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#olsenBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function salmaCall() {
  var RandomNumber = Math.floor((Math.random() * salmaHayek.length - 1) + 1);
  var RandomMovie = salmaHayek[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#hayekBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function schumerCall() {
  var RandomNumber = Math.floor((Math.random() * amySchumer.length - 1) + 1);
  var RandomMovie = amySchumer[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#schumerBack').attr('src', image);
    }

  });
}
// function to make request for posters based on celeb's favorite movies
function vinCall() {
  var RandomNumber = Math.floor((Math.random() * vinDiesel.length - 1) + 1);
  var RandomMovie = vinDiesel[RandomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(RandomMovie) + '&h=600&apikey=454a6e93').then(function (response) {
    var image = response.Poster;

    if (image !== "N/A") {
      $('#dieselBack').attr('src', image);
    }

  });
}

//code to display each celebrity's favorite movie
$('#adamsFront').click(function () {
  amyCall();
});

$('#bellFront').click(function () {
  kristenCall();
});

$('#bluntFront').click(function () {
  emilyCall();
});

$('#cainFront').click(function () {
  michaelCall();
});

$('#charlizeFront').click(function () {
  charlizeCall();
});

$('#coopFront').click(function () {
  bradleyCall();
});

$('#dawsonFront').click(function () {
  rosarioCall();
});

$('#deppFront').click(function () {
  johnnyCall();
});

$('#djimonFront').click(function () {
  djimonCall();
});

$('#radcliffeFront').click(function () {
  danielCall();
});

$('#barrymoreFront').click(function () {
  drewCall();
});

$('#eckhartFront').click(function () {
  aaronCall();
});

$('#francoFront').click(function () {
  jamesCall();
});

$('#oldmanFront').click(function () {
  garyCall();
});

$('#hanksFront').click(function () {
  tomCall();
});

$('#stathamFront').click(function () {
  jasonCall();
});

$('#loweFront').click(function () {
  robCall();
});

$('#malkovichFront').click(function () {
  johnCall();
});

$('#mcavoyFront').click(function () {
  mcAvoyCall();
});

$('#freemanFront').click(function () {
  morganCall();
});

$('#olsenFront').click(function () {
  elizabethCall();
});

$('#hayekFront').click(function () {
  salmaCall();
});

$('#schumerFront').click(function () {
  schumerCall();
});

$('#dieselFront').click(function () {
  vinCall();
});

//this is to make the flip effect when a user clicks on any image with the class card
$('.card').flip();