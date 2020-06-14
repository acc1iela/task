$(function () {
  $('.js-tabbed').click(function () {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    var index = $(this).index();
    $('.p-tabbedPanel__contents').eq(index).addClass('is-show');
  });
});
