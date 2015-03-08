 $("#quick-information div").not($("#quick-information div").eq(0)).hide();

  $('#quick-links ul li span').click(function(){
  $("#quick-information div").slideUp();
  $('#quick-links ul li span').removeClass('active');
  $(this).addClass('active');
      var classref= $(this).attr("id");
      $("#quick-information ."+classref).slideDown();
  });
