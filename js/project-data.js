let gameData = [
  // Format:
  // {
  //   title: "",
  //   description: "",
  //   names: [],
  //   url: ""
  // },
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
  */
  {
    title: "Games for All",
    description: "Game HUB website app dedicated to all of the games created and developed by the Digital Skill Youth Academy students.",
    language: "HTML, CSS, JavaScript",
    names: ["raymondnhim", "marichua", "veronikacalvo", "gageberz", "vannarysou", "victordeserley"],
    url: "https://computingforall.github.io/G4A/public/",
    project: "p2",
  },
  {
    title: "Laika",
    description: "A resource tool to find volunteer opportunities to fulfill their desire of helping others.",
    language: "Figma",
    names: ["lukaschapman", "alexissanchez", "ksushagotham", "albionauka"],
    url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
    project: "p4",
  },
  {
    title: "Technical Difficulty",
    description: "An app that reminds people to use reusable bags when they go out shopping.",
    language: "Figma",
    names: ["rebeccapaez", "williamhenke", "jasminenavarro"],
    url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
  },
  {
    title: "Blue Oceans Game Center",
    description: "A Game Center that contains a news feed, leaderboard, and friends list.",
    language: "HTML, CSS, JavaScript",
    names: ["gageberz", "victordeserley", "veronikacalvo"],
    url: "https://gageberz.github.io/WebsiteProgress/public/index",
  },
  {
    title: "Vesta Project",
    description: "A website which features a news feed, leaderboard, friends list, and a game.",
    names: ["raymondnhim"],
    language: "HTML, CSS, JavaScript",
    url: "https://hotsoz.github.io/Vesta-Project/public/index",
    project: "p1",
  },
  {
    title: "Children's Intelligence Agency",
    description: "Create a user account to sign in.",
    names: ["nolanbarham", "williamhenke", "lukaschapman"],
    language: "HTML, CSS, JavaScript",
    url: "https://data-intelligence-agency.github.io/BOA-Project/",
  },
  {
    title: "Electric Boogie Boys",
    description: "Create a user account to sign in.",
    names: ["nolanbarham", "williamhenke", "lukaschapman"],
    language: "HTML, CSS, JavaScript",
    url: "https://electricboogieboys.github.io/bankOfAmerica/username.html",
  },
  {
    title: "Momo Klickers: Jars",
    description: "Create a user account to sign in.",
    names: ["karenma", "jayecheng", "mohammedhilfi"],
    language: "HTML, CSS, JavaScript",
    url: "https://makaren.github.io/BOAproject/Login/",
  },
  {
    title: "The Educated Gamer",
    description: "Game that sheds light about the microaggressions and institutionalized racism that our country has been influenced by over the years.",
    names: ["victoriaulm", "rebeccapaez"],
    language: "MakeCode",
    url: "https://makaren.github.io/BOAproject/Login/",
  },
  {
    title: "Trees",
    description: "Plant as many trees as you can before time runs out and the tree chopping villain cuts them all down.",
    names: ["mohamedmuse", "shamtsegay"],
    language: "MakeCode",
    url: "https://makecode.com/_8LY9AqAXbFsd",
  },
  {
    title: "Sea Turtles",
    description: "Trash in the ocean is having lasting effects on sea turtles and is a real big world problem going on today. Pick up the trash before any sea turtles get to it.",
    names: ["yusufadem", "jasminenavarro"],
    language: "MakeCode",
    url: "https://makecode.com/_TaDUciE7WDrJ",
  },
  {
    title: "Water Game",
    description: "Keep our water clean and your player alive.",
    names: ["jesserivas"],
    language: "MakeCode",
    url: "https://makecode.com/_4WfJUUUThMw2",
  },
  {
    title: "To Do Lists",
    description: "Create a full to-do list while relaxing to soothing music.",
    names: ["williamhenke", "paytonsmith", "mohammedhilfi", "albionauka"],
    language: "HTML, CSS, JavaScript",
    url: "ToDo/testing_2.html",
  },
  {
    title: "Regional Barbecue",
    description: "View, share, and discuss tasty barbecue recipes from all over the world.",
    names: ["nolanbarham", "anthonybechara", "lukaschapman", "alexissanchez"],
    language: "HTML, CSS, JavaScript",
    url: "BBQ/index.html",
  },
  {
    title: "Monsanto",
    description: "Take over the world in totally legal ways as the pharmaceutical giant Monsanto.",
    names: ["nolanbarham", "williamhenke", "nuhmukhtar", "nhatphan"],
    language: "HTML, CSS, JavaScript",
    url: "Monsanto/index.html",
  },
  {
    title: "Tree Story",
    description: "Tap enemies repeatedly to kill them and protect the forest.",
    names: ["nolanbarham", "williamhenke", "henrynguyen", "jhisberllypineda"],
    language: "HTML, CSS, JavaScript",
    url: "https://scratch.mit.edu/projects/306677058/",
  },
  {
    title: "The Hate We Ignore",
    description: "A game about Islamophobia.",
    names: ["williamhenke", "lukaschapman", "nasroyusuf"],
    language: "Scratch",
    url: "https://scratch.mit.edu/projects/288022277/",
  },
  {
    title: "TRASH DASH!",
    description: "Take the garbage to the bin and learn to make the world a cleaner place!",
    names: ["anthonybechara", "jhisberllypineda"],
    language: "Scratch",
    url: "https://scratch.mit.edu/projects/288018428/",
  },
  {
    title: "The Journey of the Homeless Man",
    description: "This is a game about the daily life of a homeless man.",
    names: ["mohammedhilfi", "albionauka"],
    language: "Scratch",
    url: "https://scratch.mit.edu/projects/321363197",
  },
  {
    title: "Box Explorer",
    description: "Hardcore parkore as a box!",
    names: ["anthonybechara"],
    language: "Unity",
    url: "BoxExplorer/index.html",
  },
  {
    title: "DiveIn",
    description: "Adventures of a reincarnated Muslim.",
    names: ["nafisomukhtar"],
    language: "HTML",
    url: "DiveIn/DiveIn.html",
  },
  {
    title: "Carbon Monsters",
    description: "Plant trees to protect yourself from monsters.",
    names: ["nhatphan"],
    language: "Scratch",
    url: "https://scratch.mit.edu/projects/321929757/",
  },
];


$(document).ready(
  function() {
    const map1 = gameData.map((obj, index) => {
      const { title, description, language, names, url, project } = obj;
      let nameSec = "";
      names.forEach((name) => {
      nameSec += `<div><a href="../profiles/${name}.html"><img src="../profiles/images/pic-${name}.jpg" alt="${name.charAt(0).toUpperCase() + name.slice(1)}" class="button-disc"></a></div>`
      });
      return $(".grid-cards").append(
      `
      <div class="card">
        <div class="card-img" style="background-image: url(../projects/thumbnails/thumb_proj_${names[0]}_${project}.jpg)">
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
      ` );
      });
  }
);