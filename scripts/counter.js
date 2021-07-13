var score = 0;
var clickPow = 50000;

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


setInterval(function (){
    score = score + cursors;
    score = score + siviyags * 5 + nargiles * 15;
    document.getElementById("score").innerHTML = score;

    document.title = score + " köz - Sago Clicker";
}, 1000); //1000ms = 1 sec, Everything between those curly brackets executes in every 1000ms.