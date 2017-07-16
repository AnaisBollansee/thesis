$(document).ready(function() {
    /*var sections = []
    $('.section').each(function(index, value) {
        sections.push($( this ).attr('menu-name'))
    })
    console.log(sections)*/

    /*$.each(sections, function(index, value) {
        $('#menu').append('<li data-menuanchor="' + value + '"><a href="#' + value + '">' + value + '</a></li>')
    })*/

    $('#fullpage').fullpage({
        //menu: '#menu',
        //anchors: sections,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true
        //navigationTooltips: sections
    });
});
