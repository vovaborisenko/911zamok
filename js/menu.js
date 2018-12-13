    var $j = jQuery.noConflict();
        $j(document).ready(function(){
            $j('ul.dropdown li.parent').children('ul').css({opacity:0}).hide();
            $j('ul.dropdown li.parent').hover(
                function() {
                    $j(this).children('ul').stop().animate({opacity:1}, 800).show();
                },
                function() {
                    $j(this).children('ul').stop().animate({opacity:0}, 800, function(){$j(this).hide()});
                }
            );
        });
