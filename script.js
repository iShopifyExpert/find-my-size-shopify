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
    //if($total == $current){$('#codehouse-customizer .result').slideDown(300);}else{$('#codehouse-customizer .result').slideUp('fast');}
    $('#codehouse-customizer .progress-bar').css({width:$percent+'%'});
    if ($(window).width() > 739){ }else{ $('html,body').animate({scrollTop: $("#codehouse-customizer").offset().top}, 'slow');}
  } });
  $(document).on('click', '.swatch-container label',function() {
    $('.swatch-container').removeClass('active');
    $(this).parents('.swatch-container').addClass('active');
  });
  $('.mysize').text($.cookie("mysize"));
  function find_size() {
    var weight = $('input#input-type-weight').val();
    var height = $('input#input-type-height').val();
    var shape = $('input[name=shape]:checked').val();
    console.log(weight); console.log(height); console.log(shape);
    if ((weight >= 53 && weight <= 60) && (height >= 170 && height <= 182) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 44 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 53 && weight <= 60) && (height >= 170 && height <= 182) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 44 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 53 && weight <= 60) && (height >= 170 && height <= 182) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 44 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 61 && weight <= 71) && (height >= 171 && height <= 185) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 46 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 61 && weight <= 71) && (height >= 171 && height <= 185) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 46 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 61 && weight <= 71) && (height >= 171 && height <= 185) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 46 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 68 && weight <= 75) && (height >= 172 && height <= 187) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 48 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 68 && weight <= 75) && (height >= 172 && height <= 187) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 48 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 68 && weight <= 75) && (height >= 172 && height <= 187) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 48 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 71 && weight <= 85) && (height >= 173 && height <= 191) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 50 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 71 && weight <= 85) && (height >= 173 && height <= 191) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 50 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 71 && weight <= 85) && (height >= 173 && height <= 191) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 50 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 78 && weight <= 88) && (height >= 174 && height <= 194) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 52 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 78 && weight <= 88) && (height >= 174 && height <= 194) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 52 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 78 && weight <= 88) && (height >= 174 && height <= 194) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 52 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 81 && weight <= 94) && (height >= 175 && height <= 194) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 54 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 81 && weight <= 94) && (height >= 175 && height <= 194) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 54 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 81 && weight <= 94) && (height >= 175 && height <= 194) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 54 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 91 && weight <= 96) && (height >= 176 && height <= 194) && (shape == 'Smigre')) {
      $('.success-msg').text('Str 56 S').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 91 && weight <= 96) && (height >= 176 && height <= 194) && (shape == 'Gennemsnit / Jeg ved det ikke')) {
      $('.success-msg').text('Str 56 G').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else if ((weight >= 91 && weight <= 96) && (height >= 176 && height <= 194) && (shape == 'Rundere')) {
      $('.success-msg').text('Str 56 R').show();$('.error-msg').hide();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text($.cookie("mysize"));
    } else {
      $('.success-msg').text('').hide();$('.error-msg').show();$.cookie('mysize', $('.success-msg').text(), { expires : 7 });$('.mysize').text('');
    }
  }
  $(function () {
    console.log($('.success-msg').text());
    $('#codehouse-customizer').on('change input', 'input[data-findsize]', find_size);
  });
});