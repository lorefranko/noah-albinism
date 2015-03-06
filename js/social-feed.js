jQuery(document).ready(function($){
  $('.update').click(function(){
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  });
  
  $('.update').hover(function(){
    $(this).children('.socialNet').children('.socialBG').addClass('animated slideInLeft');
},
function(){
    $(this).children('.socialNet').children('.socialBG').removeClass('animated slideInLeft');
  });
  
  
});