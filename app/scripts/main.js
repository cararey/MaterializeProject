console.log('\'Allo \'Allo!');

$('#hello').addClass('animated tada');
$('#tagline').addClass('animated fadeIn');
$('#hireme').addClass('animated pulse');
$('#hello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
