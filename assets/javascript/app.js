var premierTeams = [];


$(document).ready(function() {
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkKBSDoo-b9RbS4wUHmCJ79eELR5NCy_Q",
    authDomain: "project-one-sample.firebaseapp.com",
    databaseURL: "https://project-one-sample.firebaseio.com",
    projectId: "project-one-sample",
    storageBucket: "project-one-sample.appspot.com",
    messagingSenderId: "8126571456",
    appId: "1:8126571456:web:8732aa8e00fb6ea9c1de25",
    measurementId: "G-J90PRM2FYK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
var auth = firebase.auth();


    // Calls the sportDB api to get the upcoming 15 premier league matches 
    var queryURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328"
    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);
        for(var i=0; i < 15; i++){
           var newGame = $("<div>").addClass("game")
           var teams = $("<p>").text(response.events[i].strEvent);
           var gameTime = $("<p>").text(response.events[i].dateEvent + " at " + response.events[i].strTime);
            newGame.append(teams,gameTime);
           
           $("#upcoming-games").append(newGame);
        }
    });

    //Calls the sportDB api to get all the teams in the premier league 
    var queryURL2 = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    $.ajax({
        url: queryURL2,
        method: "GET"
    }) .then(function(response2) {
        for(var j=0;j<20;j++){
            premierTeams.push(response2.teams[j].strTeam);
        }
        console.log(premierTeams);
    });

});