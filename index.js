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

//update scoreboard and upgrade menu every second
function update(){
    document.getElementById("score").value= score;
    document.getElementById("lumberJackAmount").innerHTML = "you own " + lumberJacksOwn + " LumberJack(s)"
    document.getElementById("houseAmount").innerHTML = "you own " + houseOwn + " House(s)"
    document.getElementById("farmAmount").innerHTML = "you own " + farmOwn + " Farm(s)"
    document.getElementById("blacksmithAmount").innerHTML = "you own " + blacksmithOwn + " Blacksmith(s)"
    document.getElementById("sawmillAmount").innerHTML = "you own " + sawmillOwn + " Sawmill(s)"
    document.getElementById("wizardTowerAmount").innerHTML = "you own " + wizardTowerOwn + " Wizard Tower(s)"
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
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("perClick", perClick);
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
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    perClick = localStorage.getItem("perClick");
    perClick = parseInt(perClick);
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

//make buildings apear after they are bought!
function addLumberJack(){
    let lumberJack = document.getElementById('lumberjack')
    lumberJack.style.display = 'inline';
}

function addHouse(){
    let house = document.getElementById('house')
    house.style.display = 'inline';
}
function addFarm(){
    let farm = document.getElementById('farm')
    farm.style.display = 'inline';
}
function addBlacksmith(){
    let blackSmith = document.getElementById('blacksmith')
    blackSmith.style.display = 'inline';
}
function addSawmill(){
    let sawMill = document.getElementById('sawmill')
    sawMill.style.display = 'inline';
}
function addWizard(){
    let wizard = document.getElementById('wizard')
    wizard.style.display = 'inline';
}


//clicking functions and autoclicking functions
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

function buyLumberjack(){
    if(score >= 500 * ((lumberJacksOwn+1))){
        score = score - (500 *((lumberJacksOwn +1)))  ;
        autoClick = autoClick + 1;
        lumberJacksOwn = lumberJacksOwn + 1
        update()
    }
}

function buyHouse(){
    if(score >= 5000 * ((houseOwn+1))){
        score = score - (5000 *((houseOwn +1)))  ;
        autoClick = autoClick + 10;
        houseOwn = houseOwn + 1
        update()
    }   
}
function buyFarm(){
    if(score >= 50000 * ((farmOwn+1))){
        score = score - (50000 *((farmOwn +1)))  ;
        autoClick = autoClick + 100;
        farmOwn = farmOwn + 1
        update()
    }     
}
function buyBlacksmith(){
    if(score >= 5000000 * ((blacksmithOwn+1))){
        score = score - (5000000 *((blacksmithOwn +1)))  ;
        autoClick = autoClick + 1000;
        blacksmithOwn = blacksmithOwn + 1
        update()
    }    
}
function buySawmill(){
    if(score >= 10000000 * ((sawmillOwn+1))){
        score = score - (10000000 *((sawmillOwn +1)))  ;
        autoClick = autoClick + 5000;
        sawmillOwn = sawmillOwn + 1
        update()
    }    
}
function buyWizard(){
    if(score >= 1000000000 * ((wizardTowerOwn+1))){
        score = score - (1000000000 *((wizardTowerOwn +1)))  ;
        autoClick = autoClick + 10000;
        wizardTowerOwn = wizardTowerOwn + 1
        update()
    }  
}



