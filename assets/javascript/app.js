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
$("#logout").on("click", function () {
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
$("#signIn").on("click", function login() {
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

//API KEYS
var ip;
var gnQ;
var gnAPIKey = "pka4bvff8kt2ru6nsny8p3md";

var omdbKey = "f7676cd9";
// Other available gnAPIKeys
// 1. pka4bvff8kt2ru6nsny8p3md
// 2. mhptv3trpfapay59nwzajpmu
// 3. vbwkapt65qwb44jjw5vdc98h

// Gracenote site to request API keys: http://developer.tmsapi.com/apps/mykeys

var zip;
//trying to make variables in global scope
var results;
var results2


//the rest of this document's code is separated between 1. the testing region and 2. the bootstrap template region
//1. Testing region
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

$("#gnMovies").on("click", function () {
    event.preventDefault();
    var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnMovieQueryURL);
    $.get(gnMovieQueryURL).then(async function (gnMovieResponse) {
        console.log(gnMovieResponse);
        results = gnMovieResponse;

        for (var i = 0; i < 5; i++) {
            var omdbQueryURL = `http://www.omdbapi.com/?t=${results[i].title}&apikey=${omdbKey}`;
            await $.get(omdbQueryURL).then(function (omdbResponse) {
                //turn the object into an array
                results2 = Object.values(omdbResponse);
                console.log("THIS IS RESULTS 2:", results2)
            });
            $("#apiFeedback").append(`<div class="test">Title: ${results[i].title}<br>Description: ${results[i].shortDescription}<br>Next Showtime: ${results[i].showtimes[0].dateTime}<br>Showing at: ${results[i].showtimes[i].theatre.name}<br><div id="poster"><img src="${results2[13]}"></div></div>`);

        };

        console.log("This is Test Array:", testArray);

    });
});

//         //notes on movies
//         //need to figure out how to send a radius or even change locale if you don't want it to look up a movie from where you are at that time
//         //need to figure out what the output should look like
//     });
// });

// $("#gnTV").on("click", function () {
//     event.preventDefault();
//     var gnTVQueryURL = `https://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note Movie Showtime query: " + gnTVQueryURL);
//     $.get(gnTVQueryURL).then(function (gnTVResponse) {
//         console.log(gnTVResponse);
//         //notes on tv
//         //need to figure out how to get line ups customized to the user. There should also be a way to send in a search term to narrow the search. Right now all lineups are against line up id USA-TX42500-X
//         //need to figure out what the output should look like
//     });
// });

// $("#gnSports").on("click", function () {
//     event.preventDefault();
//     var gnSportsQueryURL = `https://data.tmsapi.com/v1.1/sports/all/events/airings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what sports are on TV query: " + gnSportsQueryURL);
//     $.get(gnSportsQueryURL).then(function (gnSportsResponse) {
//         console.log(gnSportsResponse);
//         //notes on Sports
//         //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
//         //need to figure out what the output should look like
//     });
// });

// $("#gnTVMovies").on("click", function () {
//     event.preventDefault();
//     var gnTVMoviesQueryURL = `https://data.tmsapi.com/v1.1/movies/airings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what movies are on TV query: " + gnTVMoviesQueryURL);
//     $.get(gnTVMoviesQueryURL).then(function (gnTVMoviesResponse) {
//         console.log(gnTVMoviesResponse);
//         //notes on Movies are on TV
//         //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
//         //need to figure out what the output should look like
//     });
// });
// //this is to get the Line up ID passed dynamically
// $("#gnLineup").on("click", function () {
//     event.preventDefault();
//     var gnLineupQueryURL = `http://data.tmsapi.com/v1.1/lineups?country=USA&postalCode=${zip}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what movies are on TV query: " + gnLineupQueryURL);
//     $.get(gnLineupQueryURL).then(function (gnLineupResponse) {
//         console.log(gnLineupResponse);

//     });
// });

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

$(document).ready(function () {
    // Hidding the generic text on first load of the page, when a button is clicked then the text is shown.
    $(".genericText").hide();

    $("#inTheatersNow").on("click", function (event) {
        console.log("Successfully clicked");
        $(".genericText").show();
        event.preventDefault();
        //code to make it open the movies in theaters html in a new tab
        window.open('./inTheatersNowPage.html',
            '_blank' // <- This is what makes it open in a new window.
        );
        console.log(results);
        var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
        $.get(gnMovieQueryURL).then(async function (gnMovieResponse) {
            console.log(gnMovieResponse);
            var results = gnMovieResponse;
            for (var i = 0; i < 1; i++) {
                var omdbQueryURL = `http://www.omdbapi.com/?t=${results[i].title}&apikey=${omdbKey}`;
                await $.get(omdbQueryURL).then(function (omdbResponse) {
                    //turn the object into an array
                    results2 = Object.values(omdbResponse);
                    console.log("THIS IS RESULTS 2:", results2)
                });
                $("#displayTitleOne").append(`<div>${results[0].title}<div>`);
                $("#displayDescriptionOne").append(`<div>${results[0].shortDescription}<div>`);
                $("#displayNextShowtimeOne").append(`<div>${results[0].showtimes[0].dateTime}<div>`);
                $("#displayTheaterOne").append(`<div>${results[0].showtimes[0].theatre.name}<div>`);
                // Below line not working--need to append the movie poster to the other half of the screen

                //$("#poster").append(`<div>${results2[13]}<div>`);

                // Results for Title 2
                $("#displayTitleTwo").append(`<div>${results[1].title}<div>`);
                $("#displayDescriptionTwo").append(`<div>${results[1].shortDescription}<div>`);
                $("#displayNextShowtimeTwo").append(`<div>${results[1].showtimes[0].dateTime}<div>`);
                $("#displayTheaterTwo").append(`<div>${results[1].showtimes[0].theatre.name}<div>`);

                // Results for Title 3
                $("#displayTitleThree").append(`<div>${results[2].title}<div>`);
                $("#displayDescriptionThree").append(`<div>${results[2].shortDescription}<div>`);
                $("#displayNextShowtimeThree").append(`<div>${results[2].showtimes[0].dateTime}<div>`);
                $("#displayTheaterThree").append(`<div>${results[2].showtimes[0].theatre.name}<div>`);

                // Results for Title 4
                $("#displayTitleFour").append(`<div>${results[3].title}<div>`);
                $("#displayDescriptionFour").append(`<div>${results[3].shortDescription}<div>`);
                $("#displayNextShowtimeFour").append(`<div>${results[3].showtimes[0].dateTime}<div>`);
                $("#displayTheaterFour").append(`<div>${results[3].showtimes[0].theatre.name}<div>`);

                // Results for Title 5
                $("#displayTitleFive").append(`<div>${results[4].title}<div>`);
                $("#displayDescriptionFive").append(`<div>${results[4].shortDescription}<div>`);
                $("#displayNextShowtimeFive").append(`<div>${results[4].showtimes[0].dateTime}<div>`);
                $("#displayTheaterFive").append(`<div>${results[4].showtimes[0].theatre.name}<div>`);
            }
        });
    });
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


