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
        let body = document.querySelector('body'),
            nav = document.createElement('nav');

        nav.setAttribute('class', 'navbar');
        nav.innerHTML = `
            <div class="navbar-logo">
                <a href="http://computingforall.org" class="cfa-logo"></a>
                <a href="http://dsfastudents.org/">
                    <img src="images/logo-color.png" />
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
        `;

        body.prepend(nav);


        // let apndNavItems = $('.navbar-items').find('a').first();

        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'profiles').html('Students');
        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'projects').html('Projects');
        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'events').html('Events');
        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'visits').html('Visits');
        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'about').html('About');
        // apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl + 'contact').html('<i class=\"fas fa-envelope\"></i>');

        // $('.navbar-items').find('a').first().remove();
        // // END --  NAV LINKS

    }
);