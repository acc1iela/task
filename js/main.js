$(function () {
  // タブ切り替え
  $('.js-tabbed').on('click', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-tabbed-body').find('.is-show').removeClass('is-show');
    const index = $(this).index();
    //    $('.p-tabbedPanel__contents').eq(index).addClass('is-show');
    $('.js-tabbed-body > div').eq(index).addClass('is-show');
  });
  // アコーディオン
  $('.p-accordion__inner:not(:first)').css('display', 'none');
  $('.js-toggle').on('click', function () {
    $(this).not(this).removeClass('open').next().slideUp();
    $(this).toggleClass('open').next().slideToggle();
  });
});
