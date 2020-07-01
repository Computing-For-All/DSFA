const searchbar = document.getElementsByClassName("searchbar");
let title = [];

searchbar[0].addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredtitles = title.filter( character => {
        return (
            character.name.toLowerCase().includes(searchString) || 
            character.catagory.toLowerCase().includes(searchString)
        );
    }); 
    displayCharacters(filteredtitles);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('data.json');
        title = await res.json();
        displayCharacters(title);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>Catagory: ${character.catagory}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
