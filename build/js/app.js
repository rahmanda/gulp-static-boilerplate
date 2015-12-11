(function() {
  window.popupReview = {};

  window.popupReview = (function() {
    var $compose, $modal, $reviews, _closeCompose, _closeModal, _listener, _showCompose, _showModal;
    $modal = $('.modal');
    $reviews = $('.reviews');
    $compose = $('.form--review');
    _showModal = function() {
      return $modal.addClass('show');
    };
    _closeModal = function() {
      return $modal.removeClass('show');
    };
    _showCompose = function() {
      $compose.addClass('show');
      return $reviews.removeClass('show');
    };
    _closeCompose = function(e) {
      e.preventDefault();
      $compose.removeClass('show');
      return $reviews.addClass('show');
    };
    _listener = function() {
      $('.btn--review').on('click', _showModal);
      $('.btn--close').on('click', _closeModal);
      $('.btn--write').on('click', _showCompose);
      return $('.btn--send').on('click', _closeCompose);
    };
    return {
      init: function() {
        return _listener();
      }
    };
  })();

  $(function() {
    return window.popupReview.init();
  });

}).call(this);
