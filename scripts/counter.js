var score = 0;
var clickPow = 1;

var cursorCost = 15;
var cursors = 0;
var siviyagCost = 100;
var siviyags = 0;
var nargileCost = 2500;
var nargiles = 0;


function buyCursor(){
    if (score >= cursorCost){
        score = score - cursorCost;
        cursors++;
        cursorCost = Math.round(cursorCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        updateScorePerSe();

    }
}

function buySiviyag(){
    if (score >= siviyagCost){
        score = score - siviyagCost;
        siviyags++;
        siviyagCost = Math.round(siviyagCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("siviyagCost").innerHTML = siviyagCost;
        document.getElementById("siviyags").innerHTML = siviyags;
        updateScorePerSe();
    }
}

function buyNargile(){
    if (score >= nargileCost){
        score = score - nargileCost;
        nargiles++;
        nargileCost = Math.round(nargileCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("nargileCost").innerHTML = nargileCost;
        document.getElementById("nargiles").innerHTML = nargiles;
        updateScorePerSe();
    }
}

function clickY(amount){
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function updateScorePerSe(){
    scorePS = cursors + siviyags * 5 + nargiles * 75;
    document.getElementById("scorePS").innerHTML = scorePS;
}

function LoadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    if (typeof savedGame.clickPow !== "undefined") clickPow = savedGame.clickPow;
    if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
    if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
    if (typeof savedGame.siviyagCost !== "undefined") siviyagCost = savedGame.siviyagCost;
    if (typeof savedGame.siviyags !== "undefined") siviyags = savedGame.siviyags;
    if (typeof savedGame.nargileCost !== "undefined") nargileCost = savedGame.nargileCost;
    if (typeof savedGame.nargiles !== "undefined") nargiles = savedGame.nargiles;
    
}

window.onload = function(){
    LoadGame();
    updateScorePerSe();
    document.getElementById("score").innerHTML = score;
    document.getElementById("cursorCost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("score").innerHTML = score;
    document.getElementById("siviyagCost").innerHTML = siviyagCost;
    document.getElementById("siviyags").innerHTML = siviyags;
    document.getElementById("score").innerHTML = score;
    document.getElementById("nargileCost").innerHTML = nargileCost;
    document.getElementById("nargiles").innerHTML = nargiles;
};

function SaveGame(){
    var gameSave = {
        score: score,    
        clickPow: clickPow,
        cursorCost: cursorCost,
        cursors: cursors,
        siviyagCost: siviyagCost,
        siviyags: siviyags,
        nargileCost: nargileCost,
        nargiles: nargiles
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function ResetGame(){
    if(confirm("Are you sure you want to reset your game progres")){
        var gameSave;
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

setInterval(function (){
    score = score + cursors;
    score = score + siviyags * 5 + nargiles * 15;
    document.getElementById("score").innerHTML = score;

    document.title = score + " köz - Sago Clicker";
}, 1000); //1000ms = 1 sec, Everything between those curly brackets executes in every 1000ms.

setInterval(function(){
        SaveGame();
    }, 30000); //30000ms = 30 secs

    document.addEventListener("keydown", function(event){
        if (event.ctrlKey && event.which == 83){ // 83 is s key
            event.preventDefault();
            SaveGame();
        }
    }, false);