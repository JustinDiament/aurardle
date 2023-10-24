
  function shuffle(array) {
let currentIndex = array.length,  randomIndex;

// While there remain elements to shuffle...
while (currentIndex != 0) {

// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex--;

// And swap it with the current element.
[array[currentIndex], array[randomIndex]] = [
array[randomIndex], array[currentIndex]];
}

return array;
}



                var availableTags = [
                "Masai Troutman",
                "Glen McClintock",
                "Chase Cormier",
                "Rashad King",
                "Harold Woods",
                "Jahmyl Telfort",
                "Alex Nwagha",
                "Jared Turner",
                "Coleman Stucke",
                "Joe Pridgen",
                "Chris Doherty",
                "Collin Metcalf",
                "To Randriasalama",

                "Jaelyn Batts",
                "Derin Erdogan",
                "Izzy Larsen",
                "Jamiya Braxton",
                "Oralye Kiefer",
                "Camille Clement",
                "Deja Bristol",
                "Amyrah Sapenter",
                "Anna Boruta",
                "Ariana Webb",
                "Maddie Vizza",
                "Gemima Motema",
                "Asha Parker",
                "Marian Turnbull",
                "Halle Idowu",

                "Alexa Matses",
                "Lily Shannon",
                "Tory Mariano",
                "Katy Knoll",
                "Molly Griffin",
                "Kristina Allard",
                "Holly Abela",
                "Alina Mueller",
                "Chloe Aurard",
                "Mia Brown",
                "Lily Yovetich",
                "Mia Langolis",
                "Abbey Marohn",
                "Maureen Murphy",
                "Peyton Cullaton",
                "Kate Holmes",
                "Megan Carter",
                "Taylor Guarino",
                "Paige Taborski",
                "Gwyneth Philips",
                "Jules Constantinople",
                "Taze Thompson",
                "Lily Brazis",
                "Maude Poulin-Labelle",
                "Skylar Irving",
                "Peyton Anderson",
                "Avery Anderson",
                "Alyssa Antonakis",

                "Devon Levi",
                "Jayden Struble",
                "Jeremie Bucheler",
                "Hunter McDonald",
                "Chase Mcinnis",
                "Michael Outzen",
                "Jackson Dorrington",
                "Matt Choupani",
                "Jakov Novak",
                "Gunnarwolfe Fontaine",
                "Cam Lund",
                "Liam Walsh",
                "Jack Williams",
                "Sam Colangelo",
                "Braden Doyle",
                "Tyler Spott",
                "Riley Hughes",
                "Alex Mella",
                "Matt DeMelis",
                "Vinny Borgesi",
                "Cam Gaudette",
                "Kyle Furey",
                "Aidan McDonough",
                "James Davenport",
                "Jack Hughes",
                "Justin Hryckowian",
                "Harrison Chesney",
                "Grant Riley",

                "Danny Crossen",
                "Hayden Smith",
                "Jack Thorbahn",
                "Dennis Colleran",
                "Sean McGee",
                "Aiven Cabral",
                "Cam Maldonado",
                "Mike Sirota",
                "Harrison Feinberg",
                "Alex Lane",
                "Eric Yost",
                "Joseph Hauser",
                "Matt Brinker",
                "Patrick Harrington",
                "Matt Downing",
                "Ryan Griffin",
                "Brett Dunham",
                "Griffin Young",
                "Luke Beckstein",
                "Jordy Allard",
                "Justin Bosland",
                "Spenser Smith",
                "Ed Jarvis",
                "Craig Ottaviano",
                "Jack Doyle",
                "Melo Musacchia",
                "Michael Gemma",
                "James Quinlivan",
                "Tyler MacGregor",
                "Luke Masiuk",
                "Jack Beauchesne",
                "Nick Davis",
                "Jake Gigliotti",
                "Sean Quinlivan",
                "Carson Walsh",
                "Jimmy Sullivan",
                "Will Jones",
                "Wyatt Scotti",
                "James Morice",
                "Gregory Bozzo",

                "Tyson Walker"];
          shuffle(availableTags);


      $( "#enter_field_6" ).autocomplete({
source: availableTags,
select: function (event, ui) {
$(this).val(ui.item.value);
document.getElementById("hide_row_sometimes5").classList.add('revealrow');
// document.getElementById("sub").click();
var urlheight = 'http://127.0.0.1:5000/determine/height?playertyped='
var urlsport = 'http://127.0.0.1:5000/determine/sport?playertyped='
var urlposition = 'http://127.0.0.1:5000/determine/position?playertyped='
var urlyear = 'http://127.0.0.1:5000/determine/year?playertyped='
var urlnumber = 'http://127.0.0.1:5000/determine/number?playertyped='
var urlcheckwinner = 'http://127.0.0.1:5000/check/winner?playertyped='

var checkheight = 'http://127.0.0.1:5000/check/height?playertyped='
var checksport = 'http://127.0.0.1:5000/check/sport?playertyped='
var checkposition = 'http://127.0.0.1:5000/check/position?playertyped='
var checkyear = 'http://127.0.0.1:5000/check/year?playertyped='
var checknumber = 'http://127.0.0.1:5000/check/number?playertyped='



var playertyped = document.getElementById("enter_field_6").value;
var urlheightfull = urlheight + playertyped
var urlsportfull = urlsport + playertyped
var urlpositionfull = urlposition + playertyped
var urlyearfull = urlyear + playertyped
var urlnumberfull = urlnumber + playertyped
var checkwinnerfull = urlcheckwinner + playertyped

var checkheightfull = checkheight + playertyped
var checksportfull = checksport + playertyped
var checkpositionfull = checkposition + playertyped
var checkyearfull = checkyear + playertyped
var checknumberfull = checknumber + playertyped

localStorage.setItem("sixthplayername", playertyped);
document.getElementById("namesix").innerHTML = localStorage.getItem("sixthplayername");

playertyped = ''
document.getElementById("hide_row_sometimes6").classList.add('revealrow');
document.getElementById("hide_row_sometimes6").classList.remove('getridofrow');

let el = document.querySelector( ':focus' );
if( el ) el.blur();




$.getJSON(checkwinnerfull,

function(data) {
localStorage.setItem("game_over", data.result);
if(localStorage.getItem("game_over")==="winner") {
document.getElementById("namesix").classList.add('greensquare');
document.getElementById('winnerbox').click();
localStorage.setItem("namecolor6", "green");
}
else {
}
})

$.getJSON(urlsportfull,
function(data) {
localStorage.setItem("sixthplayersport", data.result);
document.getElementById("sportsix").innerHTML = data.result;

}
)

$.getJSON(checksportfull,
function(data) {
localStorage.setItem("sport_check_6", data.result);
if (localStorage.getItem("sport_check_6")==="true") {
document.getElementById('sportsix').classList.add("greensquare");
}
else if (localStorage.getItem("sport_check_6")==="middle") {
    document.getElementById('sportsix').classList.add("yellowsquare");
  }
else {
document.getElementById('sportsix').classList.add("greysquare");
}

}
)

$.getJSON(urlpositionfull,
function(data) {
localStorage.setItem("sixthplayerposition", data.result);
document.getElementById("positionsix").innerHTML = data.result;
}
)

$.getJSON(checkpositionfull,
function(data) {
localStorage.setItem("position_check_6", data.result);

if (localStorage.getItem("position_check_6")==="true") {
document.getElementById('positionsix').classList.add("greensquare");
}
else if (localStorage.getItem("position_check_6")==="middle") {
    document.getElementById('positionsix').classList.add("yellowsquare");
  }
else {
document.getElementById('positionsix').classList.add("greysquare");
}

}
)

$.getJSON(urlyearfull,
function(data) {
localStorage.setItem("sixthplayeryear", data.result);
document.getElementById("yearsix").innerHTML = data.result;
}
)

$.getJSON(checkyearfull,
function(data) {

localStorage.setItem("year_check_6", data.result);
if (localStorage.getItem("year_check_6")==="true") {
document.getElementById('yearsix').classList.add("greensquare");
}
else {
document.getElementById('yearsix').classList.add("greysquare");
}

}
)

$.getJSON(urlheightfull,
function(data) {
localStorage.setItem("sixthplayerheight", data.result);
document.getElementById("heightsix").innerHTML = data.result;

}
)

$.getJSON(checkheightfull,
function(data) {

localStorage.setItem("height_check_6", data.result);
if (localStorage.getItem("height_check_6")==="true") {
document.getElementById('heightsix').classList.add("greensquare");
}
else if (localStorage.getItem("height_check_6")==="middle") {
    document.getElementById('heightsix').classList.add("yellowsquare");
  }
else {
document.getElementById('heightsix').classList.add("greysquare");

}
}
)

$.getJSON(urlnumberfull,
function(data) {

localStorage.setItem("sixthplayernumber", data.result);
document.getElementById("numbersix").innerHTML = data.result;

}
)

$.getJSON(checknumberfull,
function(data) {

localStorage.setItem("number_check_6", data.result);

if (localStorage.getItem("number_check_6")==="true") {
document.getElementById('numbersix').classList.add("greensquare");

if(localStorage.getItem("game_over")==="winner") {
fix_stats_on_win();

}
else {
  // var losttext = document.getElementById("losertext")
  //   losttext.textContent += "Maddie Mills.";
    document.getElementById('loserbox').click();
    localStorage.setItem("game_over", "loser");
    fixstatsonloss();
}
}
else if (localStorage.getItem("number_check_6")==="middle") {
    document.getElementById('numbersix').classList.add("yellowsquare");
    // var losttext = document.getElementById("losertext")
    // losttext.textContent += "Maddie Mills.";
    document.getElementById('loserbox').click();
    localStorage.setItem("game_over", "loser");
    fixstatsonloss();
  }


else {
document.getElementById('numbersix').classList.add("greysquare");
// var losttext = document.getElementById("losertext")
//     losttext.textContent += "Maddie Mills.";
document.getElementById('loserbox').click();
localStorage.setItem("game_over", "loser");
fixstatsonloss();

}
}
)

if (!localStorage.getItem("guess_count")) {
localStorage.setItem("guess_count", 1);
}
else {
localStorage.setItem("guess_count", (parseInt(localStorage.getItem("guess_count")) + 1));
}

// $('#submit_player_')[0].reset();



$('#enter_field_6').val('');
document.getElementById("submit_player_6").classList.add('getridofinput');

}
});