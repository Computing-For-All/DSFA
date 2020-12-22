$(document).ready(
    function(){
    
        
        //  NAV LINKS
        let apndNavItems = $('.navbar-items').find('a').first();
        
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/profiles').html('Students');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/projects').html('Projects');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/events').html('Events');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/visits').html('Projects');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/about').html('About');
        apndNavItems.clone().appendTo('.navbar-list').attr('href','/contact').html('<i class=\"fas fa-envelope\"></i>');
    
        $('.navbar-items').find('a').first().remove();
        // END --  NAV LINKS
        
        
        
    }
);