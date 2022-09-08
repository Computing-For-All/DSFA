$(document).ready(
    function () {

        // Determine if URL is on Github Pages
        let pageUrl = document.URL.split('/')[3];
        if (pageUrl === 'DSFA') {
            pageUrl = '/DSFA/'
        } else {
            pageUrl = '/';
        }

        // Insert Nav Html
        let headerElem = document.querySelector('[data-js-target="js-populate-header"]');

        headerElem.innerHTML = `
            <nav class="navbar">
                <div class="navbar-logo">
                    <a href="https://computingforall.org" class="cfa-logo" target="_blank"></a>
                    <a href="` + pageUrl + `"
                        ><img src="images/logo-color.png"
                    ></a>
                </div>
                <div>
                    <div class="navbar-items">
                        <div class="hamburger">
                            <i class="fas fa-bars"></i>
                        </div>
                        <div class="navbar-list">
                            <a href="` + pageUrl + `profiles">Students</a>
                            <a href="` + pageUrl + `projects">Projects</a>
                            <a href="` + pageUrl + `events">Events</a>
                            <a href="` + pageUrl + `visits">Visits</a>
                            <a href="` + pageUrl + `about">About</a>
                            <a href="` + pageUrl + `contact"
                                ><i class="fas fa-envelope"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
);