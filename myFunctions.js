/* Global variables */
let toystory = [];
let monsters = [];
let grinch = [];
let frozen = [];
let i;  /* should probably user currentQuestion or some other name but i was shorter */
let movie;
let hint;
let answer;
let noMovie;
let noQuestions;
let btn;
var modal = document.getElementById("myModal");
let btn2;
var modal2 = document.getElementById("myModal2");

/* define global JS array for movie and display function name */
let movieList = [["toystory"],
                 ["monsters"],
                 ["grinch"],
                 ["frozen"]
                ];

/* handles update of navigation class name to add responsive functionality */
function navFunction() {
    let navMenu = document.getElementById("myTopnav");
    if (navMenu.className === "topnav") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "topnav";
    }
}

/*  when HTML file loads read contents of json file and store in JS Arrays */
function loadQuestions(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','questions.json', true);

    xhr.onload = function(){
        const questions = JSON.parse(this.responseText);
        let question;

        noMovies = movieList.length;
        for (let x = 0; x < movieList.length; x++){
            let name = "questions." + movieList[x];

            /* Okay this is a little confusing ... let me try to explain 
               High-Level:  Loop through movieList and store contents in 
               array for each movie.
               Low-Level: movieList is a multi-dimensional array that contains array name for movie
               list in first position of each row.
               eval() function is used to obtain the movie array name and used to get it from the JSON
               output
            */
            for (question = 0; question < eval(name).length; question++) {
                eval(movieList[x][0]).push(eval(name)[question].question);     
                eval(movieList[x][0]).push(eval(name)[question].choice1);
                eval(movieList[x][0]).push(eval(name)[question].choice2);
                eval(movieList[x][0]).push(eval(name)[question].choice3);
                eval(movieList[x][0]).push(eval(name)[question].hint);
                eval(movieList[x][0]).push(eval(name)[question].answer);
            } 
            noQuestions = eval(name).length;
            lengthOfData = eval(movieList[x][0]).length;
        }

    }
    
    xhr.send();
};

/* to eliminate duplicate this function will reset all needed variables and 
   styles each time a movie is selected from menu
*/
function restructureContents(movieTitle) {
    $("#welcomeNote").css({"visibility":"hidden", "height": "0"});
    $(".outerBox").css("visibility","visible");
    $("#secondaryTitle").html("<h2>" +movieTitle+"</h2>"); 
    $("#prevQ").css("visibility","hidden");
    $("#nextQ").css("visibility","visible");
    /* clear all display message fields */
    $("#displayInfo").html("");

    /* hide responsive nav when movie is selected */
    document.getElementById("myTopnav").className = "topnav";

    /* reset counter variable */
    i = 0;
}

$(document).ready(function(){

/* event listeners */

/* Movie Menu listeners - once title is clicked the
   trivia questions will be displayed */
    $(".toyStory").click(function(){
        restructureContents("Toy Story");
        movie = "toystory";
        // Get the button that opens the modal
        btn = document.getElementById(movie);
        triggerModal(btn);

        displayToyStory();
    });

    $(".monsters").click(function(){
        restructureContents("Monsters");
        movie = "monsters";
        // Get the button that opens the modal
        btn = document.getElementById(movie);
        triggerModal(btn);

        displayMonsters();
    });

    $(".grinch").click(function(){
        restructureContents("Grinch");
        movie = "grinch";
        // Get the button that opens the modal
        btn = document.getElementById(movie);
        triggerModal(btn);

        displayGrinch();
    });

    $(".frozen").click(function(){
        restructureContents("Frozen");
        movie = "frozen";
        // Get the button that opens the modal
        btn = document.getElementById(movie);
        triggerModal(btn);

        displayFrozen();
    });

    /* when user select next arrow the next question will be displayed
    */
    $("#nextQ").click(function(){
        displayQuestion();
    });

    /* handles functionality when user select previous arrow */
    $("#prevQ").click(function(){
        /* NOTE: 12 is static it could be calculated but this equivalent
           to 2 set of question data found in json file */
        i= i-12;
        displayQuestion();
    });

    /* handles displaying hint when user select Show Hint */
    $("#hintR").click(function(){
        displayHint();
    });

    /* calls checkAnswer when user clicks on Submit button */
    $("#submitA").click(function(){
        checkAnswer();
    });
});

    /* handles displaying the correct questions for the movie title selected
       Note: questions obtained from questions.json file 
    */
    function displayQuestion() {
        

        /* Determine if the next or prev arrows should be displayed.
           NOTE:  in an effort to make it dynamic.  
           Get total length of data and subtract the number of question
           Then, since the arrays start at 0 need to subtract 1 more 
        */
        if (i >=(lengthOfData-noQuestions-1) ){
            $("#nextQ").css("visibility","hidden");
        } else {
            $("#nextQ").css("visibility","visible");
        }
        /* NOTE: 6 is static value - it could be calculated but this is equivalent
           to one question data found in json file */
        if (i >= 6){
            $("#prevQ").css("visibility","visible")
        } else {
            $("#prevQ").css("visibility","hidden")
        }

        /* clear all display message fields */
        $("#displayInfo").html("");

        /* determine which movie to display */
        if (movie == 'toystory') {
            displayToyStory();
        }
        if (movie == 'monsters') {
            displayMonsters();
        }
        if (movie == 'grinch') {
            displayGrinch();
        }
        if (movie == 'frozen') {
            displayFrozen();
        }        
    }; /* end of next! */


/* starts at global value i to display the current questions 
   for movie title
*/
function displayToyStory() {

    let output;
    movie="toystory";

    /* updates movie picture and adds picture info to footer */
    $('.pictureBox').html("<img src='images/toy-story-2375242_640.jpg' alt='toy story image'>");
    $('.movieImg').html('<br>Movie Image by <a href="https://pixabay.com/users/2341007-2341007/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2375242">cleber true23</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2375242">Pixabay</a>');

    $('.question').html("<h2>" + toystory[i] + "</h2>");

    output = '<div class="op" id="choice1"><label for="1"><input type="radio" id="1" name="choice" value="'+toystory[++i]+'"> '+toystory[i]+"</label></div>";
    output += '<div class="op" id="choice2"><label for="2"><input type="radio" id="2" name="choice" value="'+toystory[++i]+'"> '+toystory[i]+"</label></div>";
    output += '<div class="op" id="choice3"><label for="3"><input type="radio" id="3" name="choice" value="'+toystory[++i]+'"> '+toystory[i]+"</label></div>";
    $(".options").html(output);


    /* store the hint and answer in global variable */
    hint = toystory[++i];
    answer = toystory[++i];

    /* increment to leave it pointing to the next question */
    i++;
} 

/* starts at global value i to display the current questions 
   for movie title
*/
function displayMonsters() {
    let output;
    movie="monsters";

     /* updates movie picture and adds picture info to footer */
    $('.pictureBox').html("<img src='images/monsters-inc-832073_640.jpg' alt='monsters, inc. image'>");
    $('.movieImg').html('<br>Movie Image by <a href="https://pixabay.com/users/wetmount-986418/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=832073">Sam Chen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=832073">Pixabay</a>');

    $('.question').html("<h2>" + monsters[i] + "</h2>");

    output = '<div class="op" id="choice1"><label for="1"><input type="radio" id="1" name="choice" value="'+monsters[++i]+'"> '+monsters[i]+"</label></div>";
    output += '<div class="op" id="choice2"><label for="2"><input type="radio" id="2" name="choice" value="'+monsters[++i]+'"> '+monsters[i]+"</label></div>";
    output += '<div class="op" id="choice3"><label for="3"><input type="radio" id="3" name="choice" value="'+monsters[++i]+'"> '+monsters[i]+"</label></div>";
    $(".options").html(output);

    /* store the hint and answer in global variable */
    hint = monsters[++i];
    answer = monsters[++i];

    /* increment to leave it pointing to the next question */
    i++;
} 

/* starts at global value i to display the current questions 
   for movie title
*/
function displayGrinch() {
    let output;
    movie="grinch";

    /* updates movie picture and adds picture info to footer */
    $('.pictureBox').html("<img src='images/love-3040948_640-2.png' alt='grinch image'>");
    $('.movieImg').html('<br>Movie Image by <a href="https://pixabay.com/users/roverhate-1759589/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3040948">Ronny Overhate</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3040948">Pixabay</a>');
    
    $('.question').html("<h2>" + grinch[i] + "</h2>");
    
    output = '<div class="op" id="choice1"><label for="1"><input type="radio" id="1" name="choice" value="'+grinch[++i]+'"> '+grinch[i]+"</label></div>";
    output += '<div class="op" id="choice2"><label for="2"><input type="radio" id="2" name="choice" value="'+grinch[++i]+'"> '+grinch[i]+"</label></div>";
    output += '<div class="op" id="choice3"><label for="3"><input type="radio" id="3" name="choice" value="'+grinch[++i]+'"> '+grinch[i]+"</label></div>";
    $(".options").html(output);

    /* store the hint and answer in global variable */
    hint = grinch[++i];
    answer = grinch[++i];

    /* increment to leave it pointing to the next question */
    i++;
} 

/* starts at global value i to display the current questions 
   for movie title
*/
function displayFrozen() {
    let output;
    movie="frozen";

    /* updates movie picture and adds picture info to footer */
    $('.pictureBox').html("<img src='images/frozen-2267127_640.png' alt='frozen image'>");
    $('.movieImg').html('<br>Movie Image by <a href="https://pixabay.com/users/inspiredbythemuse-3854162/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2267127">inspiredbythemuse</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2267127">Pixabay</a>');
    
    $('.question').html("<h2>" + frozen[i] + "</h2>");

    output = '<div class="op" id="choice1"><label for="1"><input type="radio" id="1" name="choice" value="'+frozen[++i]+'"> '+frozen[i]+"</label></div>";
    output += '<div class="op" id="choice2"><label for="2"><input type="radio" id="2" name="choice" value="'+frozen[++i]+'"> '+frozen[i]+"</label></div>";
    output += '<div class="op" id="choice3"><label for="3"><input type="radio" id="3" name="choice" value="'+frozen[++i]+'"> '+frozen[i]+"</label></div>";
    $(".options").html(output);

    /* store the hint and answer in global variable */
    hint = frozen[++i];
    answer = frozen[++i];

    /* increment to leave it pointing to the next question */
    i++;
} 

/* writes hint info to html document */
function displayHint() {
    btn2 = document.getElementById('hintR');
    triggerModal2(btn2);
    $('#displayInfo').html("<strong>HINT</strong>: " + hint);
}

/* Checks to see if the user selection is correct 
   Displays message to indicate if correct or not
*/
function checkAnswer() {
    btn2 = document.getElementById('submitA');
    triggerModal2(btn2);
    /* checks if user selected an option */
    if ($('input[name="choice"]:checked').val() === undefined){
        $("#displayInfo").html("<span class='redTxt'> Answer not selected.  Please select an option.</span>");
    } else {
        /* checks if user is correct - if display correct message and highlight correct answer in green */
        if ($('input[name="choice"]:checked').val() == $('#'+answer).val()) {
            $("#displayInfo").html($('#'+answer).val() + " is <strong>CORRECT </strong>");
            $('#choice'+answer).css({"color":"green", "font-weight":"bolder"});
        }
        else {
            /* selected answer is wrong - display message and highlight correct answer in red */
            $('#choice'+answer).css({"color":"red", "font-weight":"bolder"});
            $("#displayInfo").html("<strong class='redTxt'>Wrong Answer</strong>. The correct answer is " + $('#'+answer).val() );
        }
    }
}

            
function triggerModal(btn) {

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

}

function triggerModal2(btn2) {

    var span = document.getElementsByClassName("close2")[0];
    
    modal2.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
    
    }