// Initialize Firebase
var config = {
    apiKey: "AIzaSyAPRCKjfuZwRCZcqgD1TV1gs-6QIz4X3Ic",
    authDomain: "groupproject-8fe05.firebaseapp.com",
    databaseURL: "https://groupproject-8fe05.firebaseio.com",
    projectId: "groupproject-8fe05",
    storageBucket: "groupproject-8fe05.appspot.com",
    messagingSenderId: "1058768104014"
};
firebase.initializeApp(config);
//create a variable called database to be a reference to the firesbase.database object
var database = firebase.database();
//google authentication
//function to log a user out
$("#logout").on("click", function (user) {
    event.preventDefault();
    console.log("logout was clicked!");
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("Sign Out Successful");
    }).catch(function (error) {
        // An error happened.
        console.log("ERROR: Sign Out Failed");
    });
});
$("#signIn").on("click", function login(user) {
    event.preventDefault();
    console.log("signIn was clicked!");
    //newLogin checks if a user exists, if it does the login happened and passes user to app function
    function newLogin(user) {
        if (user) {
            //login happened
            console.log("Sign In Successful")
            app(user);
        }
        //if a user does not exist, then we need to force the user to sign in via google
        else {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }

    }
    //this is a firebase listener for whenenver the "State" of a login changes
    firebase.auth().onAuthStateChanged(newLogin);
});

// Hiding all of the divs that contain the buttons' results.
$("#testingRegion").hide();
function app (user){

};
//API KEYS
var ip;
var gnQ;
var gnAPIKey = "pka4bvff8kt2ru6nsny8p3md";

var omdbKey = "f7676cd9";
// Other available gnAPIKeys
// 1. pka4bvff8kt2ru6nsny8p3md
// 2. mhptv3trpfapay59nwzajpmu
// 3. vbwkapt65qwb44jjw5vdc98h
// 4.

// Gracenote site to request API keys: http://developer.tmsapi.com/apps/mykeys

var zip;
//trying to make variables in global scope
var results;
var results2


//get user's IP address
$.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
    console.log(JSON.stringify(data, null, 2));
    ip = data.ip
    console.log(ip);
    zip = parseInt(data.postal_code);
    console.log("this is the zip: " + zip);
});
//code to format the data and time to ISO 8601 - This is for ISSUE #15
var dateISO = new Date(moment().utcOffset(-8).format("YYYY-MM-DDTHH:mm"));
var gnDate = encodeURIComponent(dateISO.toISOString().slice(0, 16) + "Z");
console.log("this is the encoded grace note date", gnDate);

$("#inTheatersNow").on("click", function () {
    event.preventDefault();
    $("#moviesInTheaters").hide();
    $("#moviesOnTV").hide();
    $("#tvShowsOnTV").hide();
    $(".suggestedPick").hide();
    $(".discoverySubButtons").hide();
    $("#celebrity").hide();
    $("#inkBlot").hide();


    $("#movies").empty();
    var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnMovieQueryURL);
    $.get(gnMovieQueryURL).then(async function (gnMovieResponse) {
        console.log(gnMovieResponse);
        results = gnMovieResponse;

        for (var i = 0; i < 5; i++) {
            var omdbQueryURL = `https://www.omdbapi.com/?t=${results[i].title}&apikey=${omdbKey}`;
            await $.get(omdbQueryURL).then(function (omdbResponse) {
                //turn the object into an array
                results2 = Object.values(omdbResponse);
                console.log("THIS IS RESULTS 2:", results2)
            });
            $("#movies").append(`<div class="card-deck"><div class="card"><div class="text-center movieTitle">${results[i].title}</div><div class="text-center" id="poster"><img src="${results2[13]}"></div><br>Description: ${results[i].shortDescription}<br>Next Showtime: ${results[i].showtimes[0].dateTime}<br>Showing at: ${results[i].showtimes[i].theatre.name}<br></div>`);

        };

    });
});

//2. Bootstrap Template Region
//get user's IP address
$.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
    ip = data.ip
    zip = parseInt(data.postal_code);
    console.log("this is the zip: " + zip);
});
//code to format the data and time to ISO 8601 - This is for ISSUE #15
var dateISO = new Date(moment().utcOffset(-8).format("YYYY-MM-DDTHH:mm"));
var gnDate = encodeURIComponent(dateISO.toISOString().slice(0, 16) + "Z");
console.log("this is the encoded grace note date", gnDate);

//click handler for whenever a user clicks on our suggested picks
$("#ourSuggestedPick").on("click", function () {
    //prevent the page from refreshing on click
    event.preventDefault();
    //logic to show all buttons once our suggested pick is pressed
    $("#moviesInTheaters").removeAttr("hidden");
    $("#moviesOnTV").removeAttr("hidden");
    $("#tvShowsOnTV").removeAttr("hidden");
    $(".suggestedPick").removeAttr("hidden");
    $(".suggestedPick").show();
    $("#moviesInTheaters").show();
    $("#moviesOnTV").show();
    $("#tvShowsOnTV").show();
    $(".discoverySubButtons").hide();
    $("#celebrity").hide();
    $("#inkBlot").hide();
});

//click handler for whenever a user wants a suggested pick for movies in theaters
$("#moviesInTheaters").on("click", function () {
    //prevent refresh of the page on click
    event.preventDefault();
    //clear the api feedback div on every click
    $("#movies").empty();
    // //code to make it open the movies in theaters html in a new tab
    // window.open(
    //     './MoviesInTheaters.html',
    //     '_blank' // <- This is what makes it open in a new window.
    //   );
    // Using the same logic as the test search for movies in theaters  
    var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnMovieQueryURL);
    //making first ajax request to retrieve a list of movies on TV from GraceNote. Notice that the function is set to async to allow for the secondary ajax call to finish loading before this function finishes.
    $.get(gnMovieQueryURL).then(async function (gnMovieResponse) {
        console.log(gnMovieResponse);
        results = gnMovieResponse;
        //instead of a for loop here, just setting i to a random number between 0 and 5
        var i = Math.floor(Math.random() * 5)
        console.log("this is i: ", i)
        var omdbQueryURL = `https://www.omdbapi.com/?t=${results[i].title}&apikey=${omdbKey}`;
        //making secondary ajax request to omdb using the title from the first ajax request as a parameter to retrieve the appropriate poster for the movie
        await $.get(omdbQueryURL).then(function (omdbResponse) {
            //turn the object into an array
            results2 = Object.values(omdbResponse);
            console.log("THIS IS RESULTS 2:", results2)
        });
        //print the results to the page
        $("#movies").append(`<div class="card-deck"><div class="card"><div class="text-center movieTitle">${results[i].title}   </div><div class="text-center" id="poster"><img src="${results2[13]}"><br>Description: ${results[i].shortDescription}<br>Next Showtime: ${results[i].showtimes[0].dateTime}<br>Showing at: ${results[i].showtimes[i].theatre.name}<br></div></div>`);

    });
});

//click handler for whenever a user wants a suggested pick for movies playing on TV
$("#moviesOnTV").on("click", function () {
    //prevent refresh of the page on click
    event.preventDefault();
    //clear the api feedback div on every click
    $("#movies").empty();
    var gnTVMoviesQueryURL = `https://data.tmsapi.com/v1.1/movies/airings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
    console.log("This is the grace note what movies are on TV query: " + gnTVMoviesQueryURL);
    //making first ajax request to retrieve a list of movies on TV from GraceNote. Notice that the function is set to async to allow for the secondary ajax call to finish loading before this function finishes.
    $.get(gnTVMoviesQueryURL).then(async function (gnTVMoviesResponse) {
        console.log("This is the GraceNot TV Movies Response: ", gnTVMoviesResponse);
        results = gnTVMoviesResponse;
        //instead of a forloop here, just setting i to a random number between 0 and 100
        var i = Math.floor(Math.random() * 100)
        console.log("this is i: ", i)
        //making secondary ajax request to omdb using the title from the first ajax request as a parameter to retrieve the appropriate poster for the movie
        var omdbQueryURL = `https://www.omdbapi.com/?t=${results[i].program.title}&apikey=${omdbKey}`;
        await $.get(omdbQueryURL).then(function (omdbResponse) {
            //turn the object into an array
            results2 = Object.values(omdbResponse);
            console.log("THIS IS RESULTS 2:", results2)
        });
        //print results to the page
        $("#movies").append(`<div class="card-deck"><div class="card"><div class="text-center movieTitle">${results[i].program.title}</div><div class="text-center" id="poster"><img src="./assets/images/genericTV.png"><br>Description: ${results[i].program.shortDescription}<br>Next Showtime: ${results[i].startTime}<br>Playing On: ${results[i].station.callSign} on channel ${results[i].station.channel}<br></div></div>`);
    });
});

//click handler for whenever a user wants a suggested pick for tv shows playing on TV
$("#tvShowsOnTV").on("click", function () {
    //prevent refresh of the page on click
    event.preventDefault();
    //clear the api feedback div on every click
    $("#movies").empty();
    var gnTVQueryURL = `https://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnTVQueryURL);
    //ajax request to GraceNote asking for a list of shows on tv
    $.get(gnTVQueryURL).then(function (gnTVResponse) {
        console.log(gnTVResponse);
        results = gnTVResponse;
        //instead of a forloop here, just setting i to a random number between 0 and 199
        var i = Math.floor(Math.random() * 199)
        console.log("this is i: ", i)
        $("#movies").append(`<div class="card-deck"><div class="card"><div class="text-center movieTitle">${results[i].program.title}</div><div class="text-center" id="poster"><img src="./assets/images/genericTV.png"><br>Description: ${results[i].program.shortDescription}<br>Next Showtime: ${results[i].startTime}<br>Playing On: ${results[i].station.callSign} on channel ${results[i].station.channel}<br></div></div>`);
    });
});

//click handler for what's currently on TV - not from our suggested picks - so this will show top 10 shows from a possible list of ~199
$("#currentlyOnTV").on("click", function () {
    //prevent refresh of the page on click
    event.preventDefault();
    $("#moviesInTheaters").hide();
    $("#moviesOnTV").hide();
    $("#tvShowsOnTV").hide();
    $(".suggestedPick").hide();
    $(".discoverySubButtons").hide();
    $("#celebrity").hide();
    $("#inkBlot").hide();


    //clear the api feedback div on every click
    $("#movies").empty();
    var gnTVQueryURL = `https://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnTVQueryURL);
    //ajax request to GraceNote to retrieve the list of shows on TV
    $.get(gnTVQueryURL).then(function (gnTVResponse) {
        console.log(gnTVResponse);
        results = gnTVResponse;
        // for loop to generate the top 10 results passing in a random number called j
        for (var i = 0; i < 10; i++) {
            j = Math.floor(Math.random() * 199);
            console.log("this is j: ", j);
            $("#movies").append(`<div class="card-deck"><div class="card"><div class="text-center movieTitle">${results[j].program.title}</div><div class="text-center" id="poster"><img src="./assets/images/genericTV.png"><div class="card-body p-2"><div><br>Description: ${results[j].program.shortDescription}<br>Next Showtime: ${results[j].startTime}<br>Playing On: ${results[j].station.callSign} on channel ${results[j].station.channel}<br></div></div></div>`);
        };
    });
});

//click handler for when someone selects discovery quiz
$("#discoveryQuiz").on("click", function () {
    //prevent the page from refreshing on click
    event.preventDefault();
    //logic to show all buttons once our suggested pick is pressed
    $(".discoverySubButtons").removeAttr("hidden");
    $("#celebrity").removeAttr("hidden");
    $("#inkBlot").removeAttr("hidden");
    $(".discoverySubButtons").show();
    $("#celebrity").show();
    $("#inkBlot").show();
    $("#moviesInTheaters").hide();
    $("#moviesOnTV").hide();
    $("#tvShowsOnTV").hide();
    $(".suggestedPick").hide();
});

//click handler for when someone selects the celebrity picks
$("#celebrity").on("click", function () {
    //embedding the celeb.html page into the index.html page via an object tag - this is to keep with the single page application concept
    $("#movies").html('<object width="100%" height="1000px"data="./celeb.html"/>');
});


// From here to bottom is the JS code for the search bar
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = ($('#searchText').val());
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get('https://www.omdbapi.com?s=' + searchText + '&apikey=a84761b6')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
       
          <div class="card-deck">
            <div class="card">
              <div class="text-center">
                <img src="${movie.Poster}">
                <div class="card-body p-2">
                <span id="mvTitle">${movie.Title}</span>
                </div>
              <div class="card-footer">
              <button onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" id="footerBtn" href="#">Movie Details</button>
              </div>
            </div>
          </div>
        </div>
      `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {
    let movieId = sessionStorage.getItem('movieId');

    axios.get('https://www.omdbapi.com?i=' + movieId + '&apikey=a84761b6')
        .then((response) => {
            console.log(response);
            let movie = response.data;


            let output = `
  <div class="container" id="movieStats">
    <div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}" class="thumbnail pt-3">
      </div>
      <div class="col-md-8">
  
      <h2>${movie.Title}</h2>
  
      <ul class="list-group">
        <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
      </ul>
     
    </div>
  </div>
  
  <div class="row">
    <div class="container pt-3 pb-3" id="moviePlot">
      <h4>Plot</h4>
        ${movie.Plot}
        <hr>
         <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
        <a href="index.html" class="btn btn-default">Go Back to Search</a>
        </div>
      </div>
      </div>
      </div>
     `;

            $('#movie').html(output);

        })
        .catch((err) => {
            console.log(err);
        });
}

getMovie();


