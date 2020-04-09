function Button (text, x, y, w, h, onclick, border = true) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.border = border;
    this.onclick = onclick;
    this.visible = true;
    this.click =function(game) {
        if (
            this.visible &&
            game.mouse.x > this.x && 
            game.mouse.x < this.x + this.w &&
            game.mouse.y > this.y &&
            game.mouse.y < this.y + this.h
        ) this.onclick(game);
    };
    this.draw = function (ctx) {
        if (this.visible) { 
            ctx.font='bold 18px serif'
            if (this.border)
            ctx.strokeRect(this.x, this.y, this.w, this.h);
            ctx.fillText(this.text, this.x+this.w*2/5-20, this.y+this.h*1/2+5);
        }
    };
    this.hide = function () {this.visible = false};
    this.show = function () {this.visible = true};
}
function Item (obj, x, y) {
    Button.call(this,obj.title,x,y,600,40,null);
    this.obj = obj;
    this.onclick = function (game) {
        this.obj.onclick(game);
    }
    this.draw = function (ctx) {
        
        if(this.obj.owned && this.obj.upgrade !==null) {
            this.obj= this.obj.upgrade
        }
        
        if (this.visible) {
            ctx.fillStyle="black";
            if(this.obj.inprogress) {
                ctx.fillStyle="blue"
            }
            if(this.obj.owned) {
                ctx.fillStyle = "red"
            }
            ctx.font = '10px serif'
            var param1 = "";
            var param2 = "";
            if (this.obj.type == "publicRelation") {
                param1 = "Legal Fee Reduction";
                param2 = "Reputation";
            }
            if (this.obj.type == "lobbyEffort") {
                param1 = "Tax reduction";
                param2 = "Regulatory reduction";
            }
            if (this.obj.type == "chemResearch") {
                param1 = "Profit Per Farm";
                param2 = "Toxicity";
            }
            
            ctx.strokeRect(this.x, this.y, this.w, this.h+15);
            ctx.font = 'bold 18px serif'
            ctx.fillText(this.obj.title, this.x+15, this.y+this.h-25);
            ctx.font = '14px serif'
            ctx.fillText(this.obj.description, this.x+15, this.y+this.h-11);
            ctx.fillText("Cost : "+this.obj.cost+"  Time cost : " + this.obj.timeCost+"  " + param1 + " : " + this.obj.param1 + "  " + param2 + " : "  + this.obj.param2, this.x+15, this.y+this.h+5);
            ctx.fillStyle = 'black';
        }
    }
}
function Farmer (x,y) {
    Button.call(this,"",x,y,40,40,null);
    this.customer = false;
    this.cancer   = false;
    this.crossPolination = false;
    this.cancerTimer = 0;
    this.draw = function (ctx) {
        if(this.visible === true) {
            var pic = "farm-o";
            if (this.crossPolination) pic ="farm-x";
            if (this.customer) pic = "farm-m";
            if (this.cancer) pic ="farm-t";
            ctx.drawImage(document.getElementById(pic),this.x,this.y,this.w,this.h);
        }
        
    }
    this.onclick = function (game) {
        if(!this.customer&&this.crossPolination&&game.money>10000) {
            this.customer = true;
            game.money = game.money-10000;
            document.getElementById("sueSFX").play();
        } else {
            document.getElementById("deniedSFX").play();
        }
    }
    this.update = function (game) {
        if(this.cancer){
            this.cancerTimer ++
            if(this.cancerTimer >= 60*60){
                this.cancer = false;
                this.customer = false;
                this.crossPolination = false;
                this.cancerTimer = 0;
            }
        }
        
        if(!this.cancer && this.customer) {
            var check = (Math.ceil(Math.random()*1000000));
            if (game.nonCancerCustomer>1&&check<game.toxicity) {
                this.cancer = true;
                document.getElementById("toxicSFX").play();
                this.cancerTimer = 0;
            }
        }
    
    }

}