$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    nav : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    margin:50,
    center:false,
    responsive: { 0: { items: 1, nav: true }, 600: { items: 1, nav: false }, 1000: { items: 3, nav: true, loop: false } }
  });
  $('#codehouse-customizer').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous', 'onTabShow': function(tab, navigation, index) {
    var $total = navigation.find('li').length;var $current = index+1; var $percent = ($current/$total) * 100;var $current = index+1;
    if($total == $current){$('#codehouse-customizer .navbuttons .next, #codehouse-customizer .navbuttons .previous').hide();$('#codehouse-customizer .navbuttons .finish').show();}else{$('#codehouse-customizer .navbuttons .finish').hide();}
    $('#codehouse-customizer .progress-bar').css({width:$percent+'%'});
    if ($(window).width() > 739){ }else{ $('html,body').animate({scrollTop: $("#codehouse-customizer").offset().top}, 'slow');}
  } });
  $(document).on('click', '.swatch-container label',function() {
    $('.swatch-container').removeClass('active');
    $(this).parents('.swatch-container').addClass('active');
  });
  if ($.cookie("mysize") != null ){
    $('.mysize').text($.cookie("mysize")).parents('.iconli').show();
  }
  function find_size() {
    var weight = $('input#input-type-weight').val();
    var height = $('input#input-type-height').val();
    var shape = $('input[name=shape]:checked').val();
    console.log(weight); console.log(height); console.log(shape);
    if ((weight >= 50 && weight <= 54) && (height >= 170 && height <= 195) || (weight >= 55 && weight <= 59) && (height >= 176 && height <= 180) || (weight >= 55 && weight <= 59) && (height >= 186 && height <= 190) || (weight >= 55 && weight <= 59) && (height >= 191 && height <= 195)) {
      $('.success-msg').text('Str 44').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 50 && weight <= 54) && (height >= 196 && height <= 200) || (weight >= 55 && weight <= 59) && (height >= 170 && height <= 175) || (weight >= 55 && weight <= 59) && (height >= 181 && height <= 185) || (weight >= 55 && weight <= 59) && (height >= 196 && height <= 200) || (weight >= 60 && weight <= 60) && (height >= 170 && height <= 200) || (weight >= 65 && weight <= 69) && (height >= 176 && height <= 190)) {
      $('.success-msg').text('Str 46').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 65 && weight <= 69) && (height >= 170 && height <= 175) || (weight >= 65 && weight <= 69) && (height >= 191 && height <= 200) || (weight >= 70 && weight <= 74) && (height >= 191 && height <= 200)) {
      $('.success-msg').text('Str 48').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 70 && weight <= 74) && (height >= 170 && height <= 180) || (weight >= 75 && weight <= 79) && (height >= 181 && height <= 200) || (weight >= 80 && weight <= 84) && (height >= 196 && height <= 200)) {
      $('.success-msg').text('Str 50').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 70 && weight <= 74) && (height >= 181 && height <= 190)) {
      $('.success-msg').text('Str 48/50').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 75 && weight <= 79) && (height >= 170 && height <= 180) || (weight >= 80 && weight <= 84) && (height >= 170 && height <= 195) || (weight >= 85 && weight <= 89) && (height >= 176 && height <= 200)) {
      $('.success-msg').text('Str 52').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 85 && weight <= 89) && (height >= 170 && height <= 175) || (weight >= 90 && weight <= 94) && (height >= 176 && height <= 200) || (weight >= 95 && weight <= 99) && (height >= 196 && height <= 200)) {
      $('.success-msg').text('Str 54').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 90 && weight <= 94) && (height >= 170 && height <= 175) || (weight >= 95 && weight <= 99) && (height >= 170 && height <= 195)) {
      $('.success-msg').text('Str 56').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else {
      $('.success-msg').text('').hide();$('.error-msg').show();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text('');
    }
  }
  $(function () {
    console.log($('.success-msg').text());
    $('#codehouse-customizer').on('change input', 'input[data-findsize]', find_size);
  });
});
