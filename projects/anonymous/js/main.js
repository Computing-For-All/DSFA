function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if (tabName === 'newsfeed' || tabName === 'managefriends') {
        document.getElementById(tabName).style.display = "flex";
    } else {
        document.getElementById(tabName).style.display = "grid";

    }
    evt.currentTarget.className += " active";
}