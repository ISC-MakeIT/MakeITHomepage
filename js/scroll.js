$(window).scroll(function () {
  if ($(window).scrollTop() === 0) {
    $('#scroll-header').css('display', 'none');
    $('.header-left > a').css('color', 'white');
    $('.header-left > .outpage').css('border', '1px solid white');
  } else {
    $('#scroll-header').css('display', 'flex');
    $('.header-left > a').css('color', '#333');
    $('.header-left > .outpage').css('border', '1px solid black');
  }
});