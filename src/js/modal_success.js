$('.success-modal').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function() {
      $('#modal').removeClass('modal_active');
      $('#success').addClass('success_active');
  
      // после нажатия на button мод окно автоматически закрывается чере 5000 мс
      // setTimeout(function() { 
      //   $('#success').removeClass('offer-success__active');
      // }, 3000);
    },

    error: function(jqXHR, textStatus) {
      console.log(jqXHR + ': ' + textStatus);
    }
  });
  $("input, textarea").val("");
  // $("offer__input")[0].reset();
});

$('#success-close').on('click', function(){
  $('#success').removeClass('success_active');
});