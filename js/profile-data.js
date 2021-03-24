let profileData = [
        // {
        //     name: "",
        //     introduction: "",
        //     url: "",
        // },
        {
            name: "Rando Bonda",
            introduction: "asdf",
            url: "raymondnhim.html",
        },
        {
            name: "Gage Berz",
            introduction: "Hello, my name is Gage Berz, I am currently a student at Bellevue College pursuing an Associates' degree to transfer to a four year university so I can study Computer Engineering.",
            url: "gageberz.html",
        },
        {
            name: "Albiona Uka",
            introduction: "My name is Albiona Uka. I am a sophomore at Chief Sealth International High School and an aspiring graphic designer. I enjoy working at RecTech with Digital Skills For All.",
            url: "albionauka.html",
        },
        {
            name: "Alexis Sanchez",
            introduction: "",
            url: "alexissanchez.html",
        },
]

let classYear = [
    {year: [ 
    {2021: {names: ["Albiona Uka", "Alexis Sanchez", "Gage Berz"]}},
    {2020: {names: ["Rando Bonda"]}},
]}
];


$(document).ready(
    function() {
console.log(classYear)

        const map1 = classYear.map((obj, index) => {
            const { year, names } = obj;
            let profileDataInfo = "";
            year.find(names).forEach((name) => {
                let profileName = profileData.find(name);
                profileDataInfo += 
                `
                <div class="path hover-container card" style="background-image:url(images/pic-${name.split(" ").join("").toLowerCase()}.jpg);">
                <div class="overlay"></div>
                <div class="hover-headline"><h2>${name}</h2></div>
                <div class="hover-content">
                    <div>
                        <p>${introduction}</p>
                    </div>
                    <div><a href="${url}" class="button btn-blue">View Profile <span><i class="fas fa-arrow-right"></i></span></a></div>
                </div>
                </div>
                `;
            })
            return $(".test-ground").append(
                `
                    <section class="bg-white spacing-section">
                        <div class="container-txt centered spacing-txt">
                            <h1>Class of ${year}</h1>
                        </div>
                        <div class="container-full">s
                            <div class="grid-cards">
                                ${profileDataInfo}
                            </div>
                        </div>
                    </section>
                `
            );
        });

    //     const map2 = profileData.map((obj, index) => {
    //         const { name, introduction, url } = obj;
    //         return $().append(
                
    //         )
    //     });
    }
)

