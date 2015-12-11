window.popupReview = {}
window.popupReview = (->
  $modal = $('.modal')
  $reviews = $('.reviews')
  $compose = $('.form--review')

  _showModal = ->
    $modal.addClass('show')

  _closeModal = ->
    $modal.removeClass('show')

  _showCompose = ->
    $compose.addClass('show')
    $reviews.removeClass('show')

  _closeCompose = (e)->
    e.preventDefault()
    $compose.removeClass('show')
    $reviews.addClass('show')

  _listener = ->
    $('.btn--review').on 'click', _showModal
    $('.btn--close').on 'click', _closeModal
    $('.btn--write').on 'click', _showCompose
    $('.btn--send').on 'click', _closeCompose

  init: ->
    _listener()
)()

$ ->
  window.popupReview.init()
