$(document).ready(
    function () {

        // NOT SURE WHY THIS EXISTS? LEGACY?
        let pageUrl = document.URL.split('/')[3];
        if (pageUrl === 'DSFA') {
            pageUrl = '/DSFA/'
        } else {
            pageUrl = '/';
        }

        // INSERT NAV HTML
        let headerElem = document.querySelector('#js-populate-header');

        headerElem.innerHTML = `
            <nav class="navbar">
                <div class="navbar-logo">
                    <a href="http://computingforall.org" class="cfa-logo"></a>
                    <a href="http://dsfastudents.org/">
                        <img src="images/logo-color.png">
                    </a>
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
                            <a href="` + pageUrl + `contact"><i class=\"fas fa-envelope\"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
);