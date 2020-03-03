function main () {
    var canvas = document.getElementById("canvas"), // find canvas
        ctx    = canvas.getContext("2d"); // Get 2D drawing functions
    
    /*
        Initialize Game Objects
    */
        var game = {};
        function init () {
            game.ctx = ctx;
            game.canvas = canvas;
            game.mouse = {x:0,y:0,down:false,change:false};
            game.downKeys = {};
            game.buttons = {};
            game.sprites = {};
            game.money = 50000;
            game.taxes = 1000;
            game.revenue = 1500;
            game.reputation = 75;
            game.lawsuits = 0;
            game.regulations = 100;
            game.toxicity = 0;
            game.start = false;
            game.legalFees=100;
            
            game.sprites.background =  new Sprite ("PlP", 0, 0, canvas.width,canvas.height); // add the test sprite to the sprite list
            game.sprites.Boss =  new Sprite ("Boss", 400, 25, 400,500);
            game.sprites.officer =  new Sprite ("officer", 40, 100, 30,80);
            game.sprites.PRGuy =  new Sprite ("PR Guy", 550, 50, 200, 300);
            game.sprites.farmerSprite =  new Sprite ("farmer sprite", canvas.width/4, canvas.height/4, 400, 500);
            game.sprites.scientist =  new Sprite ("scientist", 550, 75, 150, 300);
            game.sprites.scientist.hide();
            game.sprites.farmerSprite.hide();
            game.sprites.PRGuy.hide();
            game.sprites.officer.hide();
            game.sprites.Boss.hide();
            /*
                CREATE BUTTONS
            */
            game.buttons.store = new Button ("Store", 10,10,70,20,null); 
            game.buttons.research = new Button ("Research", 520,170,100,20,null);
            game.buttons.play = new Button ("", 290,475,170,105,null,false);
            game.buttons.mam = new Button ("", 580,455,160,200,function(){window.open("https://www.organicconsumers.org/campaigns/millions-against-monsanto")},false);
            game.buttons.back = new Button ("Back", 10,30,70,20,null); 
            game.buttons.pr = new Button ("PR", 130,170,100,20,null); 
            game.buttons.lobbyists = new Button ("Lobbyist", 325,170,100,20,null); 
            game.buttons.musicOff = new Button ("Mute", 600,700,84,30,null);
            game.buttons.musicOff.hide();
            game.buttons.musicOn = new Button ("Unmute", 600,700,84,30,null);
            game.buttons.musicOn.hide();
            /*
                LOAD FARMERS
            */
            game.farmerX = 10;
            game.farmerY = 8;
            var randx = Math.floor(Math.random()*game.farmerX);
            var randy = Math.floor(Math.random()*game.farmerY);
            for (var x=0; x<game.farmerX; x++) {
                for (var y=0; y<game.farmerY; y++) {
                    var name = "farmer" + x + y;
                    game.buttons[name] = new Farmer (15+x*75,100+y*75);
                    game.buttons[name].hide();
                }
            }
            var name = "farmer" + randx + randy;
            game.buttons[name].customer = true;
            /*
                Create Store
            */
            
            var prItems = [
                    new PublicRelation ("Hire a Corn & Soybean Digest journalist ","Hire a journalist to write articles for your products on Corn & Soybean Digest", 5000, 20, +0, +1,
                            new PublicRelation ("Upgrade Corn & Soybean Digest journalist","Journalist gets a raise, increasing effectiveness", 8000, 90,+3 , +2)),
                    new PublicRelation ("Hire a Agri-pulse journalist","Hired journalist broadens scope and starts writing articles on Agri-pulse", 5500, 60, +0 , +2,
                            new PublicRelation ("Upgrade Agri-pulse journalist","Incentivize journalist to write more Agri-pulse articles", 8000, 10 ,+4 , +2)),
                    new PublicRelation ("Hire a Bloomberg journalist","Hire a journalist to write a article for your products on Bloomberg", 5000, 60, +10 , +2,
                            new PublicRelation ("Upgrade Bloomberg journalist","Paid journalist for bloomberg gets raise", 8000, 110, +3 , +2)),
                    new PublicRelation ("Hire a Politico journalist","Hire a journalist to write articles for your products on Politico", 5500, 60, +12 , +2,
                            new PublicRelation ("Upgrade Politico journalist","Paid journalist for Bloomberg gets a raise", 8000, 110, +4, +2)),
                    new PublicRelation ("TV advertisments","Create advertisments for multimedia formats to introduce your products", 10000, 24, +4, +2,
                             new PublicRelation ("Get with the times","Use of datamining enables use targeted advertising, enables more precise marketing to possible customers.", 15000, 30, +10, +2)),
                    new PublicRelation ("Bribe Third-party scientists"," Offer a counternarrative to shift concern away from Monsanto's products. ", 5000, 20, +2, +2,
                             new PublicRelation ( "Fake freelance journalist"," Pose a fake freelance journalist to spread beneficial news about Monsanto ", 12000, 11, +4, +2)),
                    new PublicRelation ("Spin tactics"," Use the voices of 'independent' experts to clear up confusion and mistrust", 10000,  18,+8, +2)
                ],
                lobbyistItems = [
                    new LobbyEffort ( "Hire lobbyists", "hire a team of lobbyists", 3000, 15, +10,  +10,
                        new LobbyEffort ("Upgrade lobbyists", " Double the salary of your lobbyists ", 5000, 15, 5, 15)) ,
                    new LobbyEffort ("Washington Tax & Public Policy Group","  a cutting-edge government relations firm. ", 12000, 18, 30, 15, 
                        new LobbyEffort("American Continental Group"," One of Washington's premier bipartisan government affairs and strategic consulting firms ", 50000, 11, 10, 10)),
                    new LobbyEffort ("Lincoln Policy Group "," A full-service, bipartisan governmental affairs consulting firm ", 70000, 12, 10, 25,
                        new LobbyEffort ("Akin, Gump et al "," An American international law firm and the largest lobbying firm in the United States by revenue", 50000, 17 ,10, 25)),
                    new LobbyEffort ("WilmerHale LLP "," A leading, full-service international law firm providing quality, world-class legal and client services", 100000, 11 ,10, 0)
             
                ],
                chemItems = [
                    new ChemResearch ("Roundup", "Strong herbicide, potentially toxic", 4000, 3, +100, +20, 
                        new ChemResearch ("Roundup Ready crops", "Seeds engineered with resistance to roundup, increases effectiveness of existing herbicide", 6000, 9, +100, 5,null)
                    ),
                     new ChemResearch ("Company pesticide", "Company pesticide, possibly toxic", 2000, 3, +50, +20, 
                        new ChemResearch ("BT crops", " Seeds engineered to produce their own pesticide. Buildup of protein could prove toxic", 3000, 10, +25, +5,null)
                    ),
                     new ChemResearch ("Rudis", "Fungicide brand, additional revenue. Potentially deadly allergen, but only to 1 in 100", 2000, 10, +25, +5, 
                        new ChemResearch ("Silicate crops", "Seeds engineered to produce their own fungicide, possible side effect of indigestion", 3000, 10, +25, +5,null)
                    ),
                     new ChemResearch ("Nematicide", "Toxin made to kill worms that could damage crop roots now sold, possibly toxic", 6000, 3, +100, +20,null
                    ),
                     new ChemResearch ("Asgrow", "Potent fertilizer, excess pollutes water ways", 8000, 3, +100, +20,null)
                ];
            /*
                LOAD PR ITEMS
            */
            game.prItems = [];
            for (var i = 0; i < prItems.length; i++) {
                var item = prItems[i];
                game.buttons[item.title] = new Item(item, 80,250+i*60,30,20, null);
                game.buttons[item.title].hide();
                game.prItems[i] = game.buttons[item.title];
            }
            /*
                LOAD LOBBY ITEMS
            */
            game.lobbyistItems = [];
            for (var i = 0; i< lobbyistItems.length; i++) {
                var item = lobbyistItems[i];
                game.buttons[item.title] = new Item(item, 80,300+i*60,30,20, null);
                game.buttons[item.title].hide();
                game.lobbyistItems[i] = game.buttons[item.title];
            }
            /*
                LOAD CHEM ITEMS
            */
            game.chemItems = [];
            for (var i = 0; i< chemItems.length; i++) {
                var item = chemItems[i];
                game.buttons[item.title] = new Item(item, 80,300+i*60,30,20, null);
                game.buttons[item.title].hide();
                game.chemItems[i] = game.buttons[item.title];
            }
            /*
                INIT BUTTON STATES
            */
            game.buttons.store.hide();
            game.buttons.research.hide();
            game.buttons.pr.hide();
            game.buttons.lobbyists.hide();
            game.buttons.back.hide();
            game.buttons.play.show();
            game.buttons.mam.hide();
    
            game.buttons.store.onclick = function () {
                document.getElementById("doorSFX").play();
                game.sprites.scientist.hide();
                game.sprites.PRGuy.hide();
                game.sprites.officer.hide();
                game.sprites.Boss.hide();
                game.sprites.farmerSprite.show();
                game.buttons.store.hide();
                game.buttons.research.show();
                game.buttons.pr.show();
                game.buttons.lobbyists.show();
                game.buttons.back.show();
                 for (var i =0; i<game.prItems.length; i++) {
                    game.prItems[i].hide();
                }
                 for (var i =0; i<game.lobbyistItems.length; i++) {
                    game.lobbyistItems[i].hide();
                }
                for (var i =0; i<game.chemItems.length; i++) {
                        game.chemItems[i].hide();
                }
                for (var x=0; x<game.farmerX; x++) {
                    for (var y=0; y<game.farmerY; y++) {
                        var name = "farmer" + x + y;
                        game.buttons[name].hide();
                    }
                }
            }
            game.buttons.back.onclick = function () {
                document.getElementById("backSFX").play();
                game.sprites.farmerSprite.hide();
                game.buttons.store.show();
                game.buttons.research.hide();
                game.buttons.pr.hide();
                game.buttons.lobbyists.hide();
                game.buttons.back.hide();
                for (var x=0; x<game.farmerX; x++) {
                    for (var y=0; y<game.farmerY; y++) {
                        var name = "farmer" + x + y;
                        game.buttons[name].show();
                    }
                }
            }
            game.buttons.play.onclick = function () {
                game.buttons.musicOff.show();
                document.getElementById("bgMusic").play();
                game.buttons.mam.hide();
                game.buttons.store.show();
                game.buttons.play.hide();
                game.sprites.background.pic = "MBG";
                game.start = true;
              
                for (var x=0; x<game.farmerX; x++) {
                    for (var y=0; y<game.farmerY; y++) {
                        var name = "farmer" + x + y;
                        game.buttons[name].show();
                    }
                }
            }
            game.buttons.pr.onclick = function () {
                game.sprites.PRGuy.show(); 
                game.sprites.farmerSprite.hide();
                for (var i =0; i<game.prItems.length; i++) {
                    game.prItems[i].show();
                }
                game.buttons.store.show();
                game.buttons.research.hide();
                game.buttons.pr.hide();
                game.buttons.lobbyists.hide();
                game.buttons.back.hide();
                game.buttons.play.hide();
                
            }
            game.buttons.lobbyists.onclick = function () {
                game.sprites.farmerSprite.hide();
                game.sprites.Boss.show();
                for (var i =0; i<game.lobbyistItems.length; i++) {
                    game.lobbyistItems[i].show();
                }
                game.buttons.store.show();
                game.buttons.research.hide();
                game.buttons.pr.hide();
                game.buttons.lobbyists.hide();
                game.buttons.back.hide();
                game.buttons.play.hide();
                
            }
            game.buttons.research.onclick = function () {
                game.sprites.scientist.show();
                game.sprites.farmerSprite.hide();
                for (var i =0; i<game.chemItems.length; i++) {
                    game.chemItems[i].show();
                }
                game.buttons.store.show();
                game.buttons.research.hide();
                game.buttons.pr.hide();
                game.buttons.lobbyists.hide();
                game.buttons.back.hide();
                game.buttons.play.hide();
                
            }
             game.buttons.musicOff.onclick = function () {
                document.getElementById("bgMusic").pause();
                setTimeout(function(){ game.buttons.musicOn.show();
                game.buttons.musicOff.hide();}, 5);           
                
                
            }
            
             game.buttons.musicOn.onclick = function () {
                document.getElementById("bgMusic").play();
                game.buttons.musicOn.hide();
                game.buttons.musicOff.show();
            }
            
           
        /*
            Animation Loop
        */
        game.time = 0;
    }
    init();
    function animate () {
        // Callback 60 fps :
            requestAnimationFrame (animate);
            
        // Clear canvas : 
            ctx.clearRect(0,0,canvas.width, canvas.height);
       
        // Draw Sprites :
            for (var i in game.sprites) {
                game.sprites[i].draw(ctx);
            }
        // Draw Buttons :
            for (var i in game.buttons) {
                game.buttons[i].draw(ctx);
            }
        // Handle Button Clicking :
            if (game.mouse.change && !game.mouse.down) { // test for click
                game.mouse.change = false; // Reset change checker
                // Loop through all the buttons and find the clicked button:
                for (var i in game.buttons) {
                    game.buttons[i].click(game);
                }
            }
        if (game.start)  {
            var customers = 0;
            var cancer = 0;
            for (var x=0; x<game.farmerX; x++) {
                for (var y=0; y<game.farmerY; y++) {
                    var name = "farmer" + x + y;
                    var farmer = game.buttons[name];
                    if (farmer.cancer)cancer++;
                    if (farmer.customer)customers++;
                    if (!farmer.customer&&!farmer.crossPolination) {
                        name = "farmer" + (x-1) + (y);
                        var neighbor = game.buttons[name];
                        if (typeof neighbor != "undefined" && neighbor.customer && Math.random()<1/1200) {
                            farmer.crossPolination = true;
                        }
                        name = "farmer" + (x+1) + (y);
                        var neighbor = game.buttons[name];
                        if (typeof neighbor != "undefined" && neighbor.customer && Math.random()<1/1200) {
                            farmer.crossPolination = true;
                        }
                        name = "farmer" + (x) + (y+1);
                        var neighbor = game.buttons[name];
                        if (typeof neighbor != "undefined" && neighbor.customer && Math.random()<1/1200) {
                            farmer.crossPolination = true;
                        }
                        name = "farmer" + (x) + (y-1);
                        var neighbor = game.buttons[name];
                        if (typeof neighbor != "undefined" && neighbor.customer && Math.random()<1/1200) {
                            farmer.crossPolination = true;
                        }
                    }
                }
                if (customers == 80) {
                    init();
                    game.buttons.mam.show();
                    game.sprites.background.pic = "gameWIN";
            }
            }
            game.time++;
            game.nonCancerCustomer = customers-cancer;
            if (game.time%300==0) {
                game.money+=game.revenue*customers*game.reputation/80-game.lawsuits*game.legalFees;
                game.money-=game.taxes*customers;
            }
            if (game.money < 1){
                init();
                game.buttons.mam.show();
                game.sprites.background.pic = "gameOVER";
            }
            for (var x=0; x<game.farmerX; x++) {
            for (var y=0; y<game.farmerY; y++) {
                var name = "farmer" + x + y;
                var farmer = game.buttons[name];
                farmer.update (game);
            }
            }
            ctx.font = "15px Arial";
            
            ctx.fillText("$" + Math.floor(game.money), 110, 55);
            ctx.fillText("$" + Math.floor(game.taxes*customers), 210, 55);
            ctx.fillText("$" + Math.floor(game.revenue*customers*game.reputation/80-game.lawsuits*game.legalFees), 290, 55);
            ctx.fillText(game.reputation + "%", 398, 55);
            ctx.fillText(game.toxicity + "%", 492, 55);
            ctx.fillText(game.regulations + "%", 600, 55);
            ctx.fillText("$" +(game.lawsuits*game.legalFees), 696, 55);
        }
        game.lawsuits = cancer;
    }
    animate (); // Begin Animation
    
    
    /*
        User Input Handling
    */
    // Keyboard Input
    document.onkeydown = function (e) {
     
        game.downKeys[e.key] = true;
    };
    document.onkeyup = function (e) {
  
        delete game.downKeys[e.key];
    };
    // Mouse Input
    function getMouse (e) { // Finds location of mouse within the canvas
        var rect = game.canvas.getBoundingClientRect();
        return {x:e.clientX-rect.x,y:e.clientY-rect.y};
    }
    canvas.onmousedown = function (e) {
        game.mouse = getMouse(e);
        game.mouse.down = true;
    };
    canvas.onmousemove = function (e) {
        var b = game.mouse.down;
        game.mouse = getMouse(e);
        game.mouse.down = b;
    };
    canvas.onmouseup  = 
    canvas.onmouseout = function (e) {
        game.mouse = getMouse(e);
        game.mouse.down = false;
        game.mouse.change = true;
    };
}
window.onload = main;