console.log('\'Allo \'Allo!');

console.log('\'Allo \'Allo!');



$(document).ready(function(){
  $('.collapsible').collapsible();
});

$('#hello').addClass('animated tada');
$('#tagline').addClass('animated fadeIn');
$('#hireme').addClass('animated pulse');
$('#hello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

