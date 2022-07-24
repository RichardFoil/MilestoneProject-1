let score = 0;
let autoClick = 0;
// let clicksPerSecond 

function update(){
    document.getElementById("score").value= score;
}
function timer(){
    score = score + autoClick;
    update()

}

setInterval(timer,1000)

function add(){
    score = score + 1
    update()    
}

function save(){
    localStorage.setItem("score", score);
}
function load(){
    score = localStorage.getItem("score");
    score = parseInt(score);
    update()
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
        score = score + 2;
        update();
        
    }
    
}
function buyStoneAxe(){
    if(score >= 1000){
        score = score + 5;
        update();
    }
}
function buyDoubleAxe(){
    
}
function buyGoldAxe(){
    
}
function buyHolyAxe(){
    
}
function buyPaulAxe(){
    
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



