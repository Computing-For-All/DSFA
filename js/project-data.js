let gameData = [
    {
        title: "Laika",
        description: "A resource tool to find volunteer opportunities to fulfill their desire of helping others.",
        names: ["lukas", "alexis", "ksusha", "albiona"],
        url: "https://www.figma.com/proto/iHZDx6ouHvuCqUsPlIxbwu/CFA-Prototypes?node-id=357%3A11630&scaling=scale-down",
    },
];



const map1 = gameData.map((obj, index) => {
const { title, description, names, url } = obj;
let nameSec = "";
names.forEach((name) => {
nameSec += `<div><a href="../profiles/${name}.html"><img src="../profiles/images/pic-${name}.jpg" alt="${name.charAt(0).toUpperCase() + name.slice(1)}" class="button-disc"></a></div>`
});
return `
<div class="card">
  <div class="card-img" style="background-image: url(../projects/images/${title}-thumbnail.jpg)">
      <div class="contributors">
        ${nameSec}
      </div>
  </div>
  <div>
      <h2>${title}</h2>
      <p>${description}<br><span class="label">Protyped with Figma</span></p>
  </div>
<div><a href="${url}" target="_blank" class="button btn-blue"> View Prototype <span><i class="fas fa-arrow-right"></i></span></a></div>
</div>
`
});

