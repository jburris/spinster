$(function() {
  $('body').on('click', 'i', function() {
    var pinId = $(this).data('pin-id'),
    repin = 'PIN_' + pinId + '_repin';

    if($.inArray(repin, $(this).attr('class').split(','))) {
      console.log('you tried to pin a photo!');
    }
  });
});
