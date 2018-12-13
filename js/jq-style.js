var $j = jQuery.noConflict();
$j(document).ready( function() {
	$j('#sidemenu ul.menu li a').append('<strong>&nbsp;</strong>');
	$j('#sidemenu ul.menu li, #sidemenu ul.menu li a').css({position:"relative"});
	$j('#sidemenu ul.menu li a strong').css({opacity:0, background:"#eeeeee", display:"block", position:"absolute", height:"100%", width:"100%", left:0, top:0});
	$j('#sidemenu ul.menu li a').hover(
    	function(){$j(this).children("strong").stop().animate({opacity:1}, 600)},
	    function(){$j(this).children("strong").stop().animate({opacity:0}, 750)}
    );
    $j('ul.menu-nav li a').append('<strong>&nbsp;</strong>');
	$j('ul.menu-nav li, #rt-main ul.menu-nav li a').css({position:"relative"});
	$j('ul.menu-nav li a').hover(
    	function(){$j(this).children("strong").stop().animate({opacity:1}, 600)},
	    function(){$j(this).children("strong").stop().animate({opacity:0}, 750)}
	);
});