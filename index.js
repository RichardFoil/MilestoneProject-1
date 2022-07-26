let score = 0;
let autoClick = 0;
let perClick = 1;
// let clicksPerSecond 

//update scoreboard every second
function update(){
    document.getElementById("score").value= score;
}
function timer(){
    score = score + autoClick;
    update()
}

setInterval(timer,1000)


//main score function
function add(){
    score = score + perClick
    update()    
}

//save button
function save(){
    localStorage.setItem("score", score);
}
//load button
function load(){
    score = localStorage.getItem("score");
    score = parseInt(score);
    update()
}


//hide buttons after clicking 
function hideButton(x){
    x.style.display = 'none';
}

function buyLumberjack(){
    if(score >= ((autoClick+1)^8)){
        score = score - ((autoClick+1)^8);
        autoClick = autoClick + 1;
        update()
    
    }
}

function buyIronAxe(){
    if(score >= 100){
        perClick = 2;
        score = score - 100;
        update();   
    }
}

function buyStoneAxe(){
    if(score >= 1000){
        perClick = 50;
        score = score - 1000
        update();
    }
}

function buyDoubleAxe(){
    if(score >= 10000){
        perClick = 100;
        score = score - 10000
        update();
    }
}

function buyGoldAxe(){
    if(score >= 100000){
        perClick = 500;
        score = score - 100000
        update();
    }
}
function buyHolyAxe(){
    if(score >= 500000){
       perClick = 1000;
       score = score - 500000
        update();
    }
}
function buyPaulAxe(){
    if(score >= 10000000){
        perClick = 10000;
        score = score - 10000000
        update();
    }
}
function buyHouse(){
        
}
function buyFarm(){
        
}
function buyBlacksmith(){
    
}
function buySawmill(){
    
}
function buyWizard(){
    
}



