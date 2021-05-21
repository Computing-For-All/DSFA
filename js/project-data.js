let gameData = [
  {
    title: "Games For All",
    description: "Game HUB website app dedicated to all of the games created and developed by the Digital Skill Youth Academy students.",
    language: "HTML, CSS, JavaScript",
    names: [],
    url: "https://computingforall.github.io/G4A/public/"
  },
  {
    title: "Laika",
    description: "A resource tool to find volunteer opportunities to fulfill their desire of helping others.",
    language: "Figma",
    names: ["lukaschapman", "alexissanchez", "ksushagotham", "albionauka"],
    url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
  },
  {
    title: "Technical Difficulty",
    description: "An app that reminds people to use reusable bags when they go out shopping.",
    language: "Figma",
    names: ["rebeccapaez", "williamhenke", "jasminenavarro"],
    url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down"
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
  },
  {
    title: "Children's Intelligence Agency",
    description: "Create a user account to sign in.",
    names: ["nolanbarham", "williamhenke", "lukaschapman"],
    language: "HTML, CSS, JavaScript",
    url: "https://data-intelligence-agency.github.io/BOA-Project/",
  },
  
  
  // {
  //   title: "",
  //   description: "",
  //   names: [],
  //   url: ""
  // },
];


$(document).ready(
  function() {
    const map1 = gameData.map((obj, index) => {
      const { title, description, language, names, url } = obj;
      let nameSec = "";
      names.forEach((name) => {
      nameSec += `<div><a href="../profiles/${name}.html"><img src="../profiles/images/pic-${name}.jpg" alt="${name.charAt(0).toUpperCase() + name.slice(1)}" class="button-disc"></a></div>`
      });
      return $(".grid-cards").append(
      `
      <div class="card">
        <div class="card-img" style="background-image: url(../projects/images/${title.split(" ").join("-").replace("'", "%27")}-thumbnail.jpg)">
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
