$(function () {
  $('[data-tab-switch]').on('click', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    var tabTarget = $(this).data('tab-switch');
    var $tabTargetElement = $(`[data-tab-content=${tabTarget}]`);
    $tabTargetElement.siblings().removeClass('is-show');
    $tabTargetElement.addClass('is-show');
  });
  $('.p-accordion__inner:not(:first)').hide();
  $('.js-toggle').on('click', function () {
    var $toggle = $(this);
    var $target = $toggle.next('.js-toggle-target');
    $toggle.toggleClass('open');
    $target.slideToggle();
  });
});
