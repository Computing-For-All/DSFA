/* Project Data Schema:
[
  {
    title: "",
    description: "",
    language: "",
    names: [],
    url: "",
    imageName: "",
    filter: "",
  },
]

Sample array:
[
  {
    title: "Test Project title",
    description: "Test project description",
    language: "HTML, CSS",
    // The following names must match the names of the students' profile HTML files
    names: ["testymctesterson"],
    // The following URL should lead to the project hosted on the course's game development platform (ex: Scratch, Tynker, etc) or it's web host platform (ex: GitHub Pages)
    // Some older student projects are hosted on this website and found in the projects folder, but new projects should be hosted elsewhere.
    url: "www.google.com",
    // The following name needs to match an image file in the /projects/thumbnails folder.
    imageName: "testproject",
    // The following designates which type of project it is, so it can be filtered using buttons on projects/index.html
    filter: "web",
  },
]
*/

let gameData = [
    /*
  {
    title: "Vaccine Shift Webpage",
    description: "",
    names: ["matiyasyared"],
    url: "https://matiyasyared.github.io/vaccine-shift/index.html"
  },
  {
    title: "Ocean Saver",
    description: "",
    names: ["charlestan", "fraolbogale"],
    url: "https://scratch.mit.edu/projects/449143423"
  },
  {
    title: "Team Infinite Game Center Project",
    description: "This website is a Game Center that contains a news feed, leaderboard, and friends list",
    names: ["vannarysou", "marichua"],
    url: "https://vannarysou.github.io/infinite-project/public/"
  },
  {
    title: "OceanSaver",
    description: "Displays player information, game news, and players list.",
    names: ["charlestan", "fraolbogale"],
    url: "https://charlestan44.github.io/oceansaver/public/index.html"
  },


    {
        title: "Games for All",
        description: "Game HUB website app dedicated to all of the games created and developed by the Digital Skill Youth Academy students.",
        language: "HTML, CSS, JavaScript",
        names: ["raymondnhim", "marichua", "veronikacalvo", "gageberz", "vannarysou", "victordeserley"],
        url: "https://computingforall.github.io/G4A/public/",
        imageName: "gamesforall",
    },

    // TODO: Reminder of TODOs when adding new projects
    [] Add project per sample data above
    [] Add project screenshot to /projects/thumbnails/thumb_proj_PROJECTNAME.jpg
    [] Add student data via profile-data.js TODO
*/
    
    {
        title: "SoundEx",
        description: "Empower sound with your support. Listen to your favorite music and directly support your favorite music artists via direct artist subscriptions and shops.",
        language: "HTML, CSS, JavaScript, React",
        names: ["gordontran", "elroeyayiso"],
        url: "https://gordonnrat.github.io/group-2-project/",
        imageName: "soundEx",
        filter: "web",
    },
    {
        title: "Otter Run",
        description: "There is more water than land on the earth and more life below water than life on land so why do we throw away so much trash into the ocean as if it doesn't affect the ecosystem of millions of creatures. Even creatures that don't fully live under water.",
        language: "HTML, CSS",
        names: ["alexdelatorre", "michaelberish"],
        url: "https://iinaudible.github.io/Game-Website/index.html",
        imageName: "otterrun",
        filter: "web",
    },
    {
        title: "Mind Refresher Game",
        description: "This game can act as a distraction from pain and psychological trauma. Video games can help people who are dealing with mental disorders like anxiety, depression, attention deficit hyperactivity disorder (ADHD), and post-traumatic stress disorder (PTSD).",
        language: "SCRATCH",
        names: ["andrewgonzalez", "christianlockley", "furtunabiemnet"],
        url: "https://scratch.mit.edu/projects/617604264",
        imageName: "mindrefresher",
        filter: "game",
    },
    {
        title: "Mental Health Awarness",
        description: "A topic website we worked on as group on the subject of mental health. I primarily worked on the news feed and global styling.",
        language: "HTML, CSS",
        names: ["andrewgonzalez", "christianlockley", "furtunabiemnet"],
        url: "https://agonzalez365.github.io/Topic-Website/",
        imageName: "mha",
        filter: "web",
    },
    {
        title: "Achievement of Equality",
        description: "On this website, you will learn more about this important topic and it will give you access to take action to help end this problem. You will also have a game that will entertain the users and also inform them and give them more information about gender equality.",
        language: "HTML, CSS",
        names: ["albionauka", "mohammedhilfi"],
        url: "https://albionauka.github.io/Achievement-of-equality/homepage.html",
        imageName: "aoe",
        filter: "web",
    },
    {
        title: "Achievement of Equality Game",
        description: "We built this game to show the importance of gender equality and how it's a huge problem around the world.",
        language: "SCRATCH",
        names: ["albionauka", "mohammedhilfi"],
        url: "https://scratch.mit.edu/projects/553561149",
        imageName: "aoegame",
        filter: "game",
    },
    {
        title: "Lifeline",
        description: "We created a website that brings up the importance in mental health and how mental illness and suicide is an epidemic in the United States. ",
        language: "HTML, CSS",
        names: ["alazarmengistu"],
        url: "https://breannasanchez.github.io/mentalhealthwebsite/index.html",
        imageName: "lifeline",
        filter: "web",
    },
    {
        title: "Clean Water",
        description: "Our game, Saving Water, is a topical game about global access to clean water and what you can do to help. In our game you direct a bar of soap to destroy the bacteria and progress through levels.",
        language: "SCRATCH",
        names: ["lukagoggins"],
        url: "https://scratch.mit.edu/projects/561091703",
        imageName: "cleanwater",
        filter: "game",
    },
    {
        title: "Saving Water",
        description: "Our Website for Saving Water Game! It include many funtions like leaderboard, about-us, log-in and sign-up pages!",
        language: "HTML, CSS",
        names: ["lukagoggins"],
        url: "https://lagoggins126.github.io/Cleanwatergamepage/index.html",
        imageName: "savingwater",
        filter: "web",
    },
    {
        title: "Air Website",
        description: "Website that supplements the Air scratch game.",
        language: "HTML, CSS",
        names: ["jiahaochen", "zexu"],
        url: "https://zexu24.github.io/Air-Project/",
        imageName: "airweb",
        filter: "web",
    },
    {
        title: "Air",
        description: "A simple platformer where the player dodges fumes and collects jars.",
        language: "SCRATCH",
        names: ["jiahaochen", "zexu"],
        url: "https://scratch.mit.edu/projects/560186370/",
        imageName: "air",
        filter: "game",
    },
    {
        title: "A Poor Nomad",
        description: "A Poor Nomad website is about the realities faced by nomadic homeless youth and for nomadic homeless youth to get resources they need.",
        language: "HTML, CSS",
        names: ["cherrysudderth"],
        url: "https://betty-cheng.github.io/team-beta/",
        imageName: "apoornomad",
        filter: "web",
    },
    {
        title: "A Poor Nomad Game",
        description: "A Poor Nomad is a game about being a nomadic homeless youth. You are Abby. She is a nomadic homeless youth and trying to get basic necessities such as food, water, shelter and money. The purpose of the game is to show you the harsh realities of being a nomadic homeless youth.",
        language: "SCRATCH",
        names: ["cherrysudderth"],
        url: "https://scratch.mit.edu/projects/553561204/embed",
        imageName: "apoornomadgame",
        filter: "game",
    },
    {
        title: "Ocean Saver Website",
        description: "Webpage you can use to check leaderboards, game updates, and more.",
        language: "HTML, CSS",
        names: ["charlestan"],
        url: "https://charlestan44.github.io/oceansaver/public/index.html",
        imageName: "oceansaver",
        filter: "web",
    },
    {
        title: "Ocean Saver",
        description: "This is a game about marine environmental protection. In the game you will act as a cleaner in the ocean. And there will be some evidence of pollution will appear during the game.",
        language: "SCRATCH",
        names: ["charlestan"],
        url: "https://scratch.mit.edu/projects/449143423",
        imageName: "oceansaver",
        filter: "game",
    },
    {
        title: "River Collection",
        description: "This is the Website that we made for our water pollution project",
        language: "HTML, CSS",
        names: ["benjaminnguyen", "connorchangebringer-mccoy"],
        url: "https://benjix06.github.io/ComputingForAll-GamingWebsite/",
        imageName: "rivercollectionweb",
        filter: "web",
    },
    {
        title: "River Collection",
        description: "This game reflects the current state of water pollution. We want to convey a message to users about climate change, especially water pollution.",
        language: "SCRATCH",
        names: ["benjaminnguyen", "connorchangebringer-mccoy"],
        url: "https://scratch.mit.edu/projects/553012287/embed",
        imageName: "rivercollection",
        filter: "game",
    },
    {
        title: "Climate Challenge",
        description: "We worked on this website to educate users on the effects of climate change everywhere and the effects of improper waste disposal.",
        language: "HTML, CSS",
        names: ["xuannhutran", "reannadeguzman"],
        url: "https://reannade.github.io/climatechallenge/",
        imageName: "climatechallenge",
        filter: "web",
    },
    {
        title: "Climate Challenge Game",
        description: "Plant trees, sow seeds ---> improve air, improve living environment.",
        language: "SCRATCH",
        names: ["xuannhutran", "reannadeguzman"],
        url: "https://scratch.mit.edu/projects/552719494/fullscreen/",
        imageName: "climatechallengegame",
        filter: "game",
    },
    {
        title: "Laika",
        description: "A resource tool to find volunteer opportunities to fulfill their desire of helping others.",
        language: "Figma",
        names: ["lukaschapman", "alexissanchez", "ksushagotham", "albionauka"],
        url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
        imageName: "laika",
        filter: "ux",
    },
    {
        title: "Technical Difficulty",
        description: "An app that reminds people to use reusable bags when they go out shopping.",
        language: "Figma",
        names: ["rebeccapaez", "williamhenke", "jasminenavarro"],
        url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
        imageName: "technicaldifficulty",
        filter: "ux",
    },
    {
        title: "Blue Oceans Game Center",
        description: "A Game Center that contains a news feed, leaderboard, and friends list.",
        language: "HTML, CSS, JavaScript",
        names: ["gageberz", "victordeserley", "veronikacalvo"],
        url: "https://gageberz.github.io/WebsiteProgress/public/index",
        imageName: "blueoceansgamecenter",
        filter: "web",
    },
    // {
    //   title: "Vesta Project",
    //   description: "A website which features a news feed, leaderboard, friends list, and a game.",
    //   names: ["raymondnhim"],
    //   language: "HTML, CSS, JavaScript",
    //   url: "https://hotsoz.github.io/Vesta-Project/public/index",
    //   imageName: "vestaproject",
    // },
    {
        title: "Children's Intelligence Agency",
        description: "Create a user account to sign in.",
        names: ["albionauka", "alexsanchez"],
        language: "HTML, CSS, JavaScript",
        url: "https://data-intelligence-agency.github.io/BOA-Project/",
        imageName: "childrenint",
        filter: "web",
    },
    {
        title: "Electric Boogie Boys",
        description: "Create a user account to sign in.",
        names: ["nolanbarham", "williamhenke", "lukaschapman"],
        language: "HTML, CSS, JavaScript",
        url: "https://electricboogieboys.github.io/bankOfAmerica/username.html",
        imageName: "electricboogieboys",
        filter: "web",
    },
    {
        title: "Momo Klickers: Jars",
        description: "Create a user account to sign in.",
        names: ["karenma", "jayecheng", "mohammedhilfi"],
        language: "HTML, CSS, JavaScript",
        url: "https://makaren.github.io/BOAproject/Login/",
        imageName: "momoklickers",
        filter: "web",
    },
    {
        title: "The Educated Gamer",
        description: "Game that sheds light about the microaggressions and institutionalized racism that our country has been influenced by over the years.",
        names: ["victoriaulm", "rebeccapaez"],
        language: "MakeCode",
        url: "https://makaren.github.io/BOAproject/Login/",
        imageName: "theeducatedgamer",
        filter: "game",
    },
    {
        title: "Trees",
        description: "Plant as many trees as you can before time runs out and the tree chopping villain cuts them all down.",
        names: ["mohamedmuse", "shamtsegay"],
        language: "MakeCode",
        url: "https://makecode.com/_8LY9AqAXbFsd",
        imageName: "trees",
        filter: "game",
    },
    {
        title: "Sea Turtles",
        description: "Trash in the ocean is having lasting effects on sea turtles and is a real big world problem going on today. Pick up the trash before any sea turtles get to it.",
        names: ["yusufadem", "jasminenavarro"],
        language: "MakeCode",
        url: "https://makecode.com/_TaDUciE7WDrJ",
        imageName: "seaturtles",
        filter: "game",
    },
    {
        title: "Water Game",
        description: "Keep our water clean and your player alive.",
        names: ["jesserivas"],
        language: "MakeCode",
        url: "https://makecode.com/_4WfJUUUThMw2",
        imageName: "watergame",
        filter: "game",
    },
    {
        title: "To Do Lists",
        description: "Create a full to-do list while relaxing to soothing music.",
        names: ["williamhenke", "paytonsmith", "mohammedhilfi", "albionauka"],
        language: "HTML, CSS, JavaScript",
        url: "ToDo/testing_2.html",
        imageName: "todolists",
        filter: "web",
    },
    {
        title: "Regional Barbecue",
        description: "View, share, and discuss tasty barbecue recipes from all over the world.",
        names: ["nolanbarham", "anthonybechara", "lukaschapman", "alexissanchez"],
        language: "HTML, CSS, JavaScript",
        url: "BBQ/index.html",
        imageName: "regionalbbq",
        filter: "web",
    },
    {
        title: "Monsanto",
        description: "Take over the world in totally legal ways as the pharmaceutical giant Monsanto.",
        names: ["nolanbarham", "williamhenke", "nuhmukhtar", "nhatphan"],
        language: "HTML, CSS, JavaScript",
        url: "Monsanto/index.html",
        imageName: "monsanto",
        filter: "game",
    },
    {
        title: "Tree Story",
        description: "Tap enemies repeatedly to kill them and protect the forest.",
        names: ["nolanbarham", "williamhenke", "henrynguyen", "jhisberllypineda"],
        language: "HTML, CSS, JavaScript",
        url: "https://scratch.mit.edu/projects/306677058/",
        imageName: "treestory",
        filter: "game",
    },
    {
        title: "The Hate We Ignore",
        description: "A game about Islamophobia.",
        names: ["williamhenke", "lukaschapman", "nasroyusuf"],
        language: "SCRATCH",
        url: "https://scratch.mit.edu/projects/288022277/",
        imageName: "thehateweignore",
        filter: "game",
    },
    {
        title: "TRASH DASH!",
        description: "Take the garbage to the bin and learn to make the world a cleaner place!",
        names: ["albionauka", "anthonybechara", "jhisberllypineda"],
        language: "SCRATCH",
        url: "https://scratch.mit.edu/projects/288018428/",
        imageName: "trashdash",
        filter: "game",
    },
    {
        title: "The Journey of the Homeless Man",
        description: "This is a game about the daily life of a homeless man.",
        names: ["mohammedhilfi", "albionauka"],
        language: "SCRATCH",
        url: "https://scratch.mit.edu/projects/321363197",
        imageName: "journeyofhomelessman",
        filter: "game",
    },
    {
        title: "Box Explorer",
        description: "Hardcore parkore as a box!",
        names: ["anthonybechara"],
        language: "Unity",
        url: "BoxExplorer/index.html",
        imageName: "boxexplorer",
        filter: "game",
    },
    // {
    //   title: "DiveIn",
    //   description: "Adventures of a reincarnated Muslim.",
    //   names: ["nafisomukhtar"],
    //   language: "HTML",
    //   url: "DiveIn/DiveIn.html",
    //   imageName: "divein",
    //   filter: "game",
    // },
    {
        title: "Carbon Monsters",
        description: "Plant trees to protect yourself from monsters.",
        names: ["nhatphan"],
        language: "SCRATCH",
        url: "https://scratch.mit.edu/projects/321929757/",
        imageName: "carbonmonsters",
        filter: "game",
    },
];

$(document).ready(function () {
    fillHomeCardData();
    fillCardData();
    showCard();
    filterProj();
});


// Project cards home page

function fillHomeCardData() {
    const map1 = gameData.map((obj, index) => {
        if (index < 4) {
            const { title, description, language, names, url, imageName, filter } = obj;
            let nameSec = "";
            names.forEach((name) => {
                nameSec += `<div><a href="./profiles/${name}.html"><img src="./profiles/images/pic-${name}.jpg" alt="${
                    name.charAt(0).toUpperCase() + name.slice(1)
                }" class="button-disc"></a></div>`;
            });
            return $("#home-cards").append(
                `
    <div class="card hidden-card ${filter}">
      <div class="card-img" style="background-image: url(./projects/thumbnails/thumb_proj_${imageName}.jpg)">
          <div class="contributors">
            ${nameSec}
          </div>
      </div>
      <div>
          <h2>${title}</h2>
          <p>${description}
          </br>
          <span class="label">Programmed with ${language}</span>
          </p>
      </div>
      <div><a href="${url}" target="_blank" class="button btn-blue">View Project <span><i class="fas fa-arrow-right"></i></span></a></div>
    </div>
    `
            );
        }
    });
}

// Project cards project page

function fillCardData() {
    const map1 = gameData.map((obj, index) => {
        const { title, description, language, names, url, imageName, filter } = obj;
        let nameSec = "";
        names.forEach((name) => {
            nameSec += `<div><a href="../profiles/${name}.html"><img src="../profiles/images/pic-${name}.jpg" alt="${
                name.charAt(0).toUpperCase() + name.slice(1)
            }" class="button-disc"></a></div>`;
        });
        return $("#project-cards").append(
            `
    <div class="card hidden-card ${filter}">
      <div class="card-img" style="background-image: url(../projects/thumbnails/thumb_proj_${imageName}.jpg)">
          <div class="contributors">
            ${nameSec}
          </div>
      </div>
      <div>
          <h2>${title}</h2>
          <p>${description}
          </br>
          <span class="label">Programmed with ${language}</span>
          </p>
      </div>
      <div><a href="${url}" target="_blank" class="button btn-blue">View Project <span><i class="fas fa-arrow-right"></i></span></a></div>
    </div>
    `
        );
    });
}



// Showing Cards

var showCardLimit = 8;
var filterId = "all";

function showCard() {
    $(".showMore").show();
    for (i = 0; i < showCardLimit; i++) {
        if (filterId == "all") {
            $(".card").eq(i).removeClass("hidden-card");
        } else {
            $("." + filterId)
                .eq(i)
                .removeClass("hidden-card");
        }
    }

    if (filterId == "all") {
        if (showCardLimit >= gameData.length) {
            $(".showMore").hide();
        }
    } else {
        if (showCardLimit >= filterAmount) {
            $(".showMore").hide();
        }
    }

    showCardLimit += 4;
}

$(".showMore").on("click", function () {
    showCard();
});



// Filter buttons

var filterAmount = 0;

function filterProj() {
    $(".filterButton").on("click", function () {
        filterId = $(this).attr("id");
        filterLength();
        showCardLimit = 8;

        $(".card").addClass("hidden-card");
        console.log(filterId);

        showCard();
    });
}

var key;

function filterLength() {
    filterAmount = 0;
    for (j = 0; j < gameData.length; j++) {
        const current = gameData[j];
        key = current.filter;
        if (key == filterId) {
            filterAmount++;
        }
    }
}
