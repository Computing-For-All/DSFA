# DSFA

This website is the primary public face of Computing For All's Pre-Apprentaceship program, conveying the stories and successes of our past students to partners and future students.

## Deployment

This GitHub repo is deployed via FTP to a Bluehost service which serves this site from the domain `dsfastudents.com`.

This repo's GitHub Pages deployment is currently used for development purposes only.

## Adding a DSFA student profile

1. Copy and fill out a template profile page, found at `profiles/__template_with_todos.html`
1. Place it in the `profiles` folder.
1. Name the copy in the format of `firstnamelastname.html`.
1. Add the following files, noting the folders they belong in and the similar naming convention:
    - A headshot/primary profile picture
      - `profile/images/pic-firstnamelastname.jpg`
    - A background/secondary profile picture
      - `profile/images/pic-firstnamelastname-bg.jpg`
1. Add the student's profile data to `js/profile-data.js`:

```js
/* profileData Schema
{
    'currentYear': [ 
        {
            name: "",
            introduction: "",
            url: "",
        },
    ],
    'previousYear': [ 
        { 
            // student data goes here 
        }, 
        // etc 
    ],
}
*/

// Sample: 
let profileData = {
    '2099': [
        {
            name: "Testy McTesterson",
            introduction: "I am a test student",
            url:"testymctesterson", // This must match the student's profile html file name
        },
    ]
}

```

## Adding a DSFA student project

1. Add a thumbnail image for the project to `projects/thumbnails/`
1. Add project info to `project-data.js`, as demonstrated in the code block below.

```js
/* Project Data Schema:
[
  {
    title: "",
    description: "",
    language: "",

    // The following names must match the names of the students' profile HTML files 

    names: [],

    // The following URL should lead to the project hosted on the course's game development platform (ex: Scratch, Tynker, etc) or it's web host platform (ex: GitHub Pages)
    // Some older student projects are hosted on this website and found in the projects folder, but new projects should be hosted elsewhere. 

    url: "", 

    // The following name needs to match an image file in the /projects/thumbnails folder.

    imageName: "", 

    // The following designates which type of project it is, so it can be filtered using buttons on projects/index.html

    filter: "",
  },
]

Sample data: */
let gameData = [
  {
    title: "Test Project title",
    description: "Test project description",
    language: "HTML, CSS",
    names: ["testymctesterson"],
    url: "www.google.com",
    imageName: "testproject",
    filter: "web",
  },
]
```
