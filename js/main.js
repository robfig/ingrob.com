var $body = $("body"),
    $header = $("#banner"),
    $window = $(window);

$window.on('load', function() {
   window.setTimeout(function() {
     $("body").removeClass('is-loading');
   }, 100);
 });

$('.scrolly').scrolly({
  speed: 1500
});

$('.parallax').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
        var yPos = -($window.scrollTop() / 2);

        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
    });
});
