function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

$.noConflict();

(function($) {
  
  $('html').removeClass('nojs').addClass('js');
  $('#doorbell').remove();
  var input = "<input type='button' id='doorbell' value='Play/Pause'>";
  $("body").append(input);
  
})(jQuery);

