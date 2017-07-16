$(document).ready(function() {
    var sections = []
    $('.section').each(function(index, value) {
        var attr = $(this).attr('anchor');
        if (typeof attr !== typeof undefined && attr !== false) {
            sections.push($( this ).attr('anchor'))
        }
        else {
            sections.push("" + (index+1))
        }
    })
    console.log(sections)

    /*$.each(sections, function(index, value) {
        $('#menu').append('<li data-menuanchor="' + value + '"><a href="#' + value + '">' + value + '</a></li>')
    })*/

    $('#fullpage').fullpage({
        //menu: '#menu',
        anchors: sections,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true
        //navigationTooltips: sections
    });
});
