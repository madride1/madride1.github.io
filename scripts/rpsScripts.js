let computer = 'Rock';
let player = 'Rock';
let win = '';


randomSelect= () => {
    let num = Math.floor((Math.random() * 3) + 1);

    if (num == 1){
        $('#rock1').css('border','solid 2px black');
        $('#scissor1').css('border','unset');
        $('#paper1').css('border','unset');
        computer="Rock";
    }
    if (num == 2){
        $('#paper1').css('border','solid 2px black');
        $('#scissor1').css('border','unset');
        $('#rock1').css('border','unset');
        computer="Paper";
    }
    if (num == 3){
        $('#scissor1').css('border','solid 2px black');
        $('#rock1').css('border','unset');
        $('#paper1').css('border','unset');
        computer="scissor";
    }

}
var countC = 0;
var countP = 0;
var tie = 0;
determineWinner = () => {
    if (computer == player) {
        tie++;
        win="No Winner: Tie";
    } else {
        if ( (computer == 'Rock' && player == 'Scissor') ||
             (computer == 'Paper' && player == 'Rock') ||
             (computer == 'Scissor' && player == 'Paper')){
                 countC = countC +1;
                 win="Computer wins";
             } else {
                 countP = countP +1;
                 win = "You win!!";
             }
    }
}

displayStats = () => {

    $('#win').html(win);
    $('#stats').html(
        "<strong>Player</strong>:" + countP +" <br>" +
        "<strong>Computer</strong>:" + countC + " <br>" +
        "<strong>Tie</strong>: " + tie + "<br>"
    );
}

jQuery(document).ready(function() {
    $('.scissor2').click(() =>{
        $('#scissor2').css('border','solid 2px black');
        $('#rock2').css('border','unset');
        $('#paper2').css('border','unset');
        player = "Scissor"

        $('#scissor1').css('border','unset');
        $('#paper1').css('border','unset');
        $('#rock1').css('border','unset');

        randomSelect();
        determineWinner();
        displayStats();
    });
    $('.rock2').click(() =>{
        $('#rock2').css('border','solid 2px black');
        $('#scissor2').css('border','unset');
        $('#paper2').css('border','unset');
        player = "Rock"

        $('#scissor1').css('border','unset');
        $('#paper1').css('border','unset');
        $('#rock1').css('border','unset');
        
        randomSelect();
        determineWinner();
        displayStats();
    });
    $('.paper2').click(() =>{
        $('#paper2').css('border','solid 2px black');
        $('#rock2').css('border','unset');
        $('#scissor2').css('border','unset');
        player = "Paper";


        $('#scissor1').css('border','unset');
        $('#paper1').css('border','unset');
        $('#rock1').css('border','unset');
        
        randomSelect();
        determineWinner();
        displayStats();
    });

});