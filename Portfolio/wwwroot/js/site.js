
$(document).on('click', '#navbarSupportedContent .nav-link', function (e) {
    if ($(e.target).is('a')) {
        $("#navbarSupportedContent").collapse('hide');
    }
});