//Обработка и отпарвка формы через технологию AJAX 
$('#offer-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function() {
      $('#success').addClass('offer-success__active');
      setTimeout(function() { // после нажатия на button мод окно автоматически закрывается чере 5000 мс
        $('#success').removeClass('offer-success__active');
      }, 3000);
      yaCounter55767484.reachGoal('offer-form');
    },

    error: function(jqXHR, textStatus) {
      console.log(jqXHR + ': ' + textStatus);
    }
  });
  $("input, textarea").val("");
  // $("offer__input")[0].reset();
});

  $('#offer-close').on('click', function(){
    $('#success').removeClass('offer-success__active');
  });

// $(document).ready(function(){
//   let offerButton = $('#offer-button');
//   let success = $('#success');
//   let offerClose = $('#offer-close');

//   offerButton.on('click', function(){
//     success.addClass('offer-success__active');

//     setTimeout(function() { // после нажатия на button мод окно автоматически закрывается чере 5000 мс
//       success.removeClass('offer-success__active');
//     }, 3000);
//   });

//   offerClose.on('click', function(){
//     success.removeClass('offer-success__active');
//   });
// });