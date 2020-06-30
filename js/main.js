$(function () {
  // タブ切り替え
  $('.js-tabbed').click(function () {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    const index = $(this).index();
    $('.p-tabbedPanel__contents').eq(index).addClass('is-show');
  });
  // アコーディオン
  $('.p-accordion__inner:not(:first)').css('display', 'none');
  $('.js-toggle').click(function () {
    $('.js-toggle').not(this).removeClass('open').next().slideUp();
    $(this).toggleClass('open').next().slideToggle();
  });
});
