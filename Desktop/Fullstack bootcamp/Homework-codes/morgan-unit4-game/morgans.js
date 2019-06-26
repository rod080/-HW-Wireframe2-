// game with 4 pokeballs and random result between 19-120
// every pokeball needs random number between 1-12
// generate that random number every win or loss to each pokeball
// when clicking any Pokeball, it should add previous result until equal to random number until equal to random starting number
// if greater than random result, start game over and add a loss
// if equal to random result, add win to counter 


// rod lets see if we can comment what ist is that he is doin in each block of code

var startingNum; //hmmmm what is it?
var loss = 0; //ofcourse the number of times that they yser has not guessed correctly
var win = 0; // number of times the use has guessed correctly
var prevNum = 0; //hmmm

var ballsImg = [
    "./assets/images/pokeball.png",
    "./assets/images/greatball.png",
    "./assets/images/ultraball.png",
    "./assets/images/masterball.png"
] // this is an array of images which to be used as buttons


var startGame = function () {
    $("#balls").empty();

    startingNum = Math.floor(Math.random() * 120) + 19;


    $("#result").html('Your number: ' + startingNum);

    for (var i = 0; i < 4; i++) {

        var randomNum = Math.floor(Math.random() * 12 + 1)

        var ballBtn = $("<div>");
        ballBtn.attr({
            "class": 'pokeballs',
            "data-random": randomNum,
            "style": "background-image: url(" + ballsImg[i] + "); background-repeat: no-repeat;"
            // "background-image: url(./assets/images/pokeball.png)"
        });
        $("#balls").append(ballBtn);
    }
}
startGame();

$(document).on('click', ".pokeballs", function () {
    var num = parseInt($(this).attr('data-random'));
    prevNum += num;

    $("#myScore").html("Your Score: " + prevNum)

    console.log(prevNum);
    if (prevNum > startingNum) {
        loss++;
        $("#loss").html("Your Losses: " + loss);
        prevNum = 0;
        $("#myScore").html("Your Score: " + prevNum)
        startGame();

    }
    else if (prevNum === startingNum) {
        win++;
        $("#win").html("Your Wins: " + win);
        prevNum = 0;
        $("#myScore").html("Your Score: " + prevNum)
        startGame();
    }


});
