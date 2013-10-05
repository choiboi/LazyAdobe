$(function (){
  $('ul.nav.bs-sidenav > li').click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});