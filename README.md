# DSFA

This website is the primary public face of Computing For All's Pre-Apprenticeship Program, conveying the stories and successes of our past students to partners and future students.

## Deployment

This GitHub repo is deployed via GitHub Pages and served from [dsfastudents.org](https://www.dsfastudents.org/). Refer to this [doc](https://docs.google.com/document/d/1wln7Wog64AbXoNNzSIJDIXlk0HgiTE8C38dOpyM2Ez0/edit?usp=sharing) for details on the DNS configuration, and more.

If you wish to pre-check changes, make a personal fork of this repo and deploy from there.

### Trello board

This website has a [Trello board](https://trello.com/b/ftGNpVdq/dsfa-website) with supplementary documentation. If you are working on this site, you know who to ask for access.

## Adding a student profile

1. Copy and fill out a template profile page, found at `profiles/__template_with_todos.html`
1. Place it in the `profiles` folder.
1. Name the copy in the format of `firstnamelastname.html`.
1. Add the following files
    - A headshot/primary profile picture
      - `profile/images/pic-firstnamelastname.jpg`
    - A background/secondary profile picture
      - `profile/images/pic-firstnamelastname-bg.jpg`
1. The profile page's projects section will have blank projects. Follow the steps in the [**Adding a student project**](#adding-a-student-project) instructions to complete these.
1. Add the student's profile data to `js/profile-data.js`:

```js
/* profileData Schema
{
    'currentYear': [ 
        {
            name: "",
            introduction: "",
            url: "", // This must match the student's profile html file name
        },
    ],
}
*/

// Sample: 
let profileData = {
    '2098': [
       // Existing data from a past year 
    ],
    '2099': [
        {
            // Existing data from a past student
        },
        {
            name: "Testy McTesterson",
            introduction: "I am a new test student",
            url:"testymctesterson",
        },
    ]
}
```

## Adding a student project

1. Add a thumbnail image for the project to `projects/thumbnails/`.
1. Fill in the project info into the appropriate section of the student's profile page `profiles/firstnamelastname.html`. Using the thumbnail image name where needed.
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
    // Some older student projects are hosted on this website and found in the projects folder, but new projects should be hosted on the aformentioned platforms. 

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
    // Existing data from past student projects
  },
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
