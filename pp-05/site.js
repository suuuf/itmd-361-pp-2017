

$.noConflict();

(function($) {
  var html = "  <label for='doorbell'>Click to Ring the Doorbell: </label><input type='button' id='doorbell' value='Play'>";
  $('html').removeClass('nojs').addClass('js');
  $('#doorbell').remove();
  $("body").append(html);
  
  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }
  
  $('#doorbell').on('click', function() {
    ringDoorbell();
  });
  
$( "body" ).keypress(function(e) {
    if(e.which==100){
      ringDoorbell();
    }
});
  
})(jQuery);

