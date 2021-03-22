$(document).ready(
    function(){
        
        let pageUrl = document.URL.split('/')[3];
        console.log(pageUrl);
        if(pageUrl === 'DSFA'){
            pageUrl = '/DSFA/'
        } else {
            pageUrl = './';
        }
        
        //  NAV LINKS
        let apndNavItems = $('.navbar-items').find('a').first();
        
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'profiles').html('Students');
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'projects').html('Projects');
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'events').html('Events');
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'visits').html('Visits');
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'about').html('About');
        apndNavItems.clone().appendTo('.navbar-list').attr('href', pageUrl+'contact').html('<i class=\"fas fa-envelope\"></i>');
    
        $('.navbar-items').find('a').first().remove();
        // END --  NAV LINKS
        
        
        
    }
);