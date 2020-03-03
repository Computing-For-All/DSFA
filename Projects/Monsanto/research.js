function PublicRelation (title, description, cost, timeCost, lawsuitReduction, farmerRep, upgrade=null) {
    this.title = title;
    this.description = description;
    this.cost = cost;
    this.param1 = lawsuitReduction;
    this.param2 = farmerRep;
    this.upgrade = upgrade;
    this.owned = false;
    this.inprogress = false;
    this.timeCost = timeCost;
    this.type = "publicRelation";
    
    this.onclick = function (game) {
        console.log(game.money >= this.cost , this.inprogress === false , this.owned === false);
        if  (game.money >= this.cost && this.inprogress === false && this.owned === false) {
            game.money-=this.cost;
            document.getElementById("shopSFX").play();
            this.inprogress=true;
            var temp = this;
            this.title += " (in progress)";
            setTimeout (function () {
                document.getElementById("prSFX").play();
                game.legalFees -= temp.param1;
                game.reputation += temp.param2;
                temp.owned=true;
                temp.inprogress=false;
                temp.title=temp.title.slice(0,temp.title.length-15);
                temp.title += " (owned) "
            },(game.regulations/100 * temp.timeCost)*1000);
        }else{
            document.getElementById("deniedSFX").play();
        }
        
    }
}
function LobbyEffort (title, description, cost,timeCost, taxReduction, regReduction, upgrade = null) {
    this.title = title;
    this.description = description;
    this.cost = cost;
    this.param1 = taxReduction;
    this.param2 = regReduction;
    this.upgrade = upgrade;
    this.owned = false;
    this.inprogress = false;
    this.timeCost = timeCost;
    this.type = "lobbyEffort";
    
    this.onclick = function (game) {
        if  (game.money >= this.cost  && this.inprogress === false && this.owned === false){
            game.money-=this.cost;
            document.getElementById("shopSFX").play();
            this.inprogress=true;
            var temp=this;
            setTimeout (function () {
                this.title += " (in progress)";
                game.taxes -= temp.param1;
                game.regulations -= temp.param2;
                temp.owned= true;
                temp.inprogress= false;
                document.getElementById("lawyerSFX").play();
                temp.title=temp.title.slice(0,temp.title.length-15);
                temp.title += " (owned) "
            },(game.regulations/100 * temp.timeCost)*1000);
        }else{
            document.getElementById("deniedSFX").play();
        }
        
    }
}
function ChemResearch (title, description, cost, timeCost, profitPerFarm, toxicity, upgrade = null) {
    this.title = title;
    this.description = description;
    this.cost = cost;
    this.timeCost = timeCost;
    this.param1 = profitPerFarm;
    this.param2 = toxicity;
    this.upgrade = upgrade;
    this.owned = false;
    this.inprogress = false;
    this.timeCost= timeCost;
    this.type = "chemResearch";
    
    this.onclick = function (game) {
        if  (game.money >= this.cost  && this.inprogress === false && this.owned === false){
            game.money-=this.cost;
            document.getElementById("shopSFX").play();
            var temp=this;
            this.title += " (in progress) ";
            this.inprogress = true;
            setTimeout (function () {
                document.getElementById("speechSFX").play();
                game.toxicity += temp.param2;
                game.revenue += temp.param1;
                temp.owned=true;
                temp.inprogress=false;
                temp.title=temp.title.slice(0,temp.title.length-15);
                temp.title += " (owned) "
            },(game.regulations/100 * temp.timeCost)*1000);
        }else{
            document.getElementById("deniedSFX").play();
        }
        
    }
    
}