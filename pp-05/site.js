function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

$.noConflict();

(function($) {
  $('html').removeClass('nojs').addClass('js');
  $('#doorbell').addClass('hide');
})(jQuery);

