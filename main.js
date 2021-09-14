$('ul.toques li a:first').addClass('active');
$('.secciones article').hide();
$('.secciones article:first').show();

$('ul.toques li a').click(function() {
    $('ul.toques li a').removeClass('active');
    $(this).addClass('active');
    $('.secciones article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
});