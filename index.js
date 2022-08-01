let score = 0;
let autoClick = 0;
let perClick = 1;
let multiplier = 1
let lumberJacksOwn = 0;
let houseOwn = 0;
let farmOwn = 0;
let blacksmithOwn = 0;
let sawmillOwn = 0;
let wizardTowerOwn = 0;


//update scoreboard and upgrade menu every second
function update(){
    document.getElementById("score").value= score;
    document.getElementById('clicksPerSecond').value = autoClick * multiplier
    document.getElementById('clickAmount').innerHTML = "You are clicking for  " + perClick * multiplier + "  score"
    document.getElementById("multiplierAmount").innerHTML = "Your score is being multiplied by  " + multiplier + "  ."
    document.getElementById("lumberJackAmount").innerHTML = "You own " + lumberJacksOwn + " LumberJack(s)"
    document.getElementById('lumberJackCost').innerHTML = ((lumberJacksOwn+1 )* 500)
    document.getElementById("houseAmount").innerHTML = "You own " + houseOwn + " House(s)"
    document.getElementById('houseCost').innerHTML = ((houseOwn+1 )* 5000)
    document.getElementById("farmAmount").innerHTML = "You own " + farmOwn + " Farm(s)"
    document.getElementById('farmCost').innerHTML = ((farmOwn+1 )* 50000)
    document.getElementById("blacksmithAmount").innerHTML = "You own " + blacksmithOwn + " Blacksmith(s)"
    document.getElementById('blackSmithCost').innerHTML = ((blacksmithOwn+1 )* 5000000)
    document.getElementById("sawmillAmount").innerHTML = "You own " + sawmillOwn + " Sawmill(s)"
    document.getElementById('sawmillCost').innerHTML = ((sawmillOwn+1 )* 10000000)
    document.getElementById("wizardTowerAmount").innerHTML = "You own " + wizardTowerOwn + " Wizard Tower(s)"
    document.getElementById('wizardCost').innerHTML = ((wizardTowerOwn+1 )* 1000000000)
       

}
function timer(){
    score = score + (autoClick * multiplier) ;
    update()
}

setInterval(timer,1000)


//main score function
function add(){
    score = score + (perClick * multiplier);
    update()    
}

//submit
function submit(){
    window.alert("Congragulations you clicked for a total score of  " + score + " .  You had" + lumberJacksOwn + "Lumberjacks clicking" +(lumberJacksOwn * multiplier)+ "per second.  You had  " + houseOwn + " .  Houses clicking for  "  +(houseOwn*10*multiplier) + " .   per second.  You had  " + farmOwn + "  farms clicking  " +(farmOwn* 100  * multiplier)+ "   per second .  You had   " + blacksmithOwn + "Blacksmiths clicking   " +(blacksmithOwn* 1000 * multiplier)+ "   per second.  You had   " + sawmillOwn + "    Sawmills clicking for   " + (sawmillOwn*5000*multiplier) + "   per second.  You had   " + wizardTowerOwn + "    Wizard Towers clicking for   " + (wizardTowerOwn*10000*multiplier) + "   per second.  I hope you enjoyed this Idle Clicking game in the future you will be able to compare you score with the high score of other players!"  )
    autoClick = 0
    perClick = 1
    multiplier = 1
    lumberJacksOwn = 0
    houseOwn = 0;
    farmOwn = 0
    blacksmithOwn = 0
    sawmillOwn = 0
    wizardTowerOwn = 0
    update();

}

//save button
function save(){
    localStorage.setItem("score", score);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("perClick", perClick);
    localStorage.setItem("multiplier", multiplier);
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
    multiplier= localStorage.getItem("multiplier");
    multiplier= parseInt(multiplier);
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
}

 
//clicking functions and autoclicking functions
function buyMultipler(){
    if(score >= 250000){
    multiplier = 2;
    score = score - 250000
    let multiplierupgrade = document.getElementById("multiplier")
    multiplierupgrade.style.display = 'inline';
    let MultiplerButtton = document.getElementById('MultiplerButtton')
    MultiplerButtton.style.display= 'none';
    update();
    }
}
function buyIronAxe(){
    if(score >= 100){
        perClick = (10);
        score = score - 100;
        let ironAxe = document.getElementById('ironAxeUpgrade')
        ironAxe.style.display = 'block';
        let ironAxeButton = document.getElementById('ironAxeButtonShop')
        ironAxeButton.style.display = 'none';
        let stoneAxe = document.getElementById('stoneAxeButtonShop')
        stoneAxe.style.display = 'inline';
        update();   
    }
}

function buyStoneAxe(){
    if(score >= 1000){
        perClick = (50);
        score = score - 1000
        let ironAxe = document.getElementById('ironAxeUpgrade')
        ironAxe.style.display = 'none';
        let stoneAxe = document.getElementById('stoneAxeUpgrade')
        stoneAxe.style.display = 'block';
        let stoneAxeButton = document.getElementById('stoneAxeButtonShop')
        let doubleAxe = document.getElementById('doubleAxeButtonShop')
        doubleAxe.style.display = 'inline';
        stoneAxeButton.style.display = 'none';
        update();
    }
}

function buyDoubleAxe(){
    if(score >= 10000){
        perClick = (100);
        score = score - 10000
        let stoneAxe = document.getElementById('stoneAxeUpgrade')
        stoneAxe.style.display = 'none';
        let doubleAxe = document.getElementById('doubleAxeUpgrade')
        doubleAxe.style.display = 'block';
        let doubleAxeButton = document.getElementById('doubleAxeButtonShop')
        let goldAxe = document.getElementById('goldAxeButtonShop')
        goldAxe.style.display = 'inline';
        doubleAxeButton.style.display = 'none';
        update();
    }
}

function buyGoldAxe(){
    if(score >= 100000){
        perClick = (500);
        score = score - 100000
        let doubleAxe = document.getElementById('doubleAxeUpgrade')
        doubleAxe.style.display = 'none';
        let goldAxe = document.getElementById('goldAxeUpgrade')
        goldAxe.style.display = 'block';
        let goldAxeButton = document.getElementById('goldAxeButtonShop')
        let holyAxe = document.getElementById('holyAxeButtonShop')
        holyAxe.style.display = 'inline';
        goldAxeButton.style.display = 'none';
        update();
    }
}
function buyHolyAxe(){
    if(score >= 500000){
       perClick = (1000);
       score = score - 500000
       let goldAxe = document.getElementById('goldAxeUpgrade')
       goldAxe.style.display = 'none';
       let holyAxe = document.getElementById('holyAxeUpgrade')
       holyAxe.style.display = 'block';
       let holyAxeButton = document.getElementById('holyAxeButtonShop')
       let paulAxe = document.getElementById('paulAxeButtonShop')
       paulAxe.style.display = 'inline';
       holyAxeButton.style.display = 'none';
       update();
    }
}
function buyPaulAxe(){
    if(score >= 10000000){
        perClick = 10000;
        score = score - 10000000
        let holyAxe = document.getElementById('holyAxeUpgrade')
        holyAxe.style.display = 'none';
        let paulAxe = document.getElementById('paulAxeUpgrade')
        paulAxe.style.display = 'block';
        let paulAxeButton = document.getElementById('paulAxeButtonShop')
        paulAxeButton.style.display = 'none';
        update();
    }
}

function buyLumberjack(){
    if(score >= 500 * ((lumberJacksOwn+1))){
        score = score - (500 *((lumberJacksOwn +1)))  ;
        autoClick = (autoClick + 1)  ;
        lumberJacksOwn = lumberJacksOwn + 1
        let lumberJack = document.getElementById('lumberjack')
        lumberJack.style.display = 'inline';
        update()
    }
}

function buyHouse(){
    if(score >= 5000 * ((houseOwn+1))){
        score = score - (5000 *((houseOwn +1)))  ;
        autoClick = (autoClick + 10) ;
        houseOwn = houseOwn + 1
        let house = document.getElementById('house')
        house.style.display = 'inline';
        update()
    }   
}
function buyFarm(){
    if(score >= 50000 * ((farmOwn+1))){
        score = score - (50000 *((farmOwn +1)))  ;
        autoClick = (autoClick + 100);
        farmOwn = farmOwn + 1
        let farm = document.getElementById('farm')
        farm.style.display = 'inline';
        update()
    }     
}
function buyBlacksmith(){
    if(score >= 5000000 * ((blacksmithOwn+1))){
        score = score - (5000000 *((blacksmithOwn +1)))  ;
        autoClick = (autoClick + 1000);
        blacksmithOwn = blacksmithOwn + 1
        let blackSmith = document.getElementById('blacksmith')
        blackSmith.style.display = 'inline';
        update()
    }    
}
function buySawmill(){
    if(score >= 10000000 * ((sawmillOwn+1))){
        score = score - (10000000 *((sawmillOwn +1)))  ;
        autoClick = autoClick + (5000);
        sawmillOwn = sawmillOwn + 1
        let sawMill = document.getElementById('sawmill')
        sawMill.style.display = 'inline';
        update()
    }    
}
function buyWizard(){
    if(score >= 1000000000 * ((wizardTowerOwn+1))){
        score = score - (1000000000 *((wizardTowerOwn +1)))  ;
        autoClick = (autoClick + 10000);
        wizardTowerOwn = wizardTowerOwn + 1
        let wizard = document.getElementById('wizard')
        wizard.style.display = 'inline';
        update()
    }  
}
