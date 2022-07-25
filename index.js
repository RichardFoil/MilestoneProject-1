let score = 0;
let autoClick = 0;
let perClick = 1;
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
    score = score + perClick
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
        perClick = 2;
        score = score - 100
        update();   
         
    }
}
function removeIron() {
    var elem = document.getElementsByClassName('iron');
    elem.parentNode.removeChild(elem);
    return false;
}

function buyStoneAxe(){
    if(score >= 1000){
        perClick = 5;
        score = score - 1000
        update();
    }
}

function buyDoubleAxe(){
    if(score >= 10000){
        perClick = 10;
        score = score - 10000
        update();
    }
}

function buyGoldAxe(){
    if(score >= 100000){
        perClick = 50;
        score = score - 100000
        update();
    }
}
function buyHolyAxe(){
    if(score >= 500000){
       perClick = 100;
       score = score - 500000
        update();
    }
}
function buyPaulAxe(){
    if(score >= 10000000){
        perClick = 1000;
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



