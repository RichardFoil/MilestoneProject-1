let score = 0;
let autoClick = 0;
let perClick = 1;
let lumberJacksOwn = 0;
let houseOwn = 0;
let farmOwn = 0;
let blacksmithOwn = 0;
let sawmillOwn = 0;
let wizardTowerOwn = 0;
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
    localStorage.setItem("lumberJackAmount", lumberJacksOwn);
    localStorage.setItem("houseAmount", houseOwn);
    localStorage.setItem("farmAmount", farmOwn);
    localStorage.setItem("blacksmithAmount", blacksmithOwn);
    localStorage.setItem("sawmillAmount", sawmillOwn);
    localStorage.setItem("wizardTowerAmount", wizardTowerOwn);
  
}
//load button
function load(){
    score = localStorage.getItem("score");
    score = parseInt(score);
    lumberJacksOwn = localStorage.getItem("lumberJackAmount");
    lumberJacksOwn = parseInt(lumberJacksOwn);
    houseOwn = localStorage.getItem("houseAmount");
    houseOwn = parseInt(houseOwn);
    farmOwn = localStorage.getItem("farmAmount");
    farmOwn = parseInt(farmOwn);
    blacksmithOwn = localStorage.getItem("blacksmithAmount");
    blacksmithOwn = parseInt(blacksmithOwn);
    sawmillOwn = localStorage.getItem("sawmillAmount");
    sawmillOwn = parseInt(sawmillOwn);
    wizardTowerOwn = localStorage.getItem("wizardTowerAmount");
    wizardTowerOwn = parseInt(wizardTowerOwn);
    update()
}


//hide buttons after clicking code from https://www.howtocodeschool.com/2021/10/javascript-hide-button-after-click.html
function hideButton(x){
    x.style.display = 'none';
}
 
//show upgrades in store and replace old Axes
function showIronAxe(){
    let ironAxe = document.getElementById('ironAxeUpgrade')
    ironAxe.style.display = 'block';
}
function replaceIronAxe(){
    let ironAxe = document.getElementById('ironAxeUpgrade')
    ironAxe.style.display = 'none';
    let stoneAxe = document.getElementById('stoneAxeUpgrade')
    stoneAxe.style.display = 'block';
}
function replaceStoneAxe(){
    let stoneAxe = document.getElementById('stoneAxeUpgrade')
    stoneAxe.style.display = 'none';
    let doubleAxe = document.getElementById('doubleAxeUpgrade')
    doubleAxe.style.display = 'block';
}
function replaceDoubleAxe(){
    let doubleAxe = document.getElementById('doubleAxeUpgrade')
    doubleAxe.style.display = 'none';
    let goldAxe = document.getElementById('goldAxeUpgrade')
    goldAxe.style.display = 'block';
}
function replaceGoldAxe(){
    let goldAxe = document.getElementById('goldAxeUpgrade')
    goldAxe.style.display = 'none';
    let holyAxe = document.getElementById('holyAxeUpgrade')
    holyAxe.style.display = 'block';
}

function buyLumberjack(){
    if(score >= ((autoClick+1)*10)){
        score = score - ((autoClick+1)*10);
        autoClick = autoClick + 1;
        update()
    
    }
}

function buyIronAxe(){
    if(score >= 100){
        perClick = 10;
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



