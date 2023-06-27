$(function () {

  $('.menu-toggle').on('click', function () {
    $('.menu-list').toggleClass('menu-list-visible');
    $('.header-buttons').toggleClass('header-buttons-visible');
  });

  $('.footer-button-product').on('click', function () {
    $('.footer-top-list-product').toggleClass('product-visible');
    $('.footer-button-product').toggleClass('footer-button-product-active');    
  });


  $('.footer-button-support').on('click', function () {
    $('.footer-top-list-support').toggleClass('support-visible');
    $('.footer-button-support').toggleClass('footer-button-support-active');
  });

  $('.footer-button-company').on('click', function () {
    $('.footer-top-list-company').toggleClass('company-visible');
    $('.footer-button-company').toggleClass('footer-button-company-active');
  });

  $('.footer-button-legal').on('click', function () {
    $('.footer-top-list-legal').toggleClass('legal-visible');
    $('.footer-button-legal').toggleClass('footer-button-legal-active');
  });


});