$(document).ready(
    function(){
    
        
        //  NAV LINKS
        let apndNavItems = $('.navbar-items').find('a').first();
        
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/profiles').html('Students');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/projects').html('Projects');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/events').html('Events');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/visits').html('Visits');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/about').html('About');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','http://dsfastudents.org/contact').html('<i class=\"fas fa-envelope\"></i>');
    
        $('.navbar-items').find('a').first().remove();
        // END --  NAV LINKS
        
        
        
    }
);