$(function (){
  $('ul.nav.bs-sidenav > li').click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
  $('.form-control').click(function(){
    console.log("selected");
  });
  $(".modalBtn").click(function(e){
    e.preventDefault();
    e.stopPropagation();
  	var loadTarget = $(this).data("loadTarget");
$this = $(this);
    $.ajax({
      url: "modaldata/" + loadTarget +".html",
      cache: false
    }).done(function(html){
      $('#myModal').children('.modal-content').append(html);
      $('#myModal').modal('show');
    });
    
  });
});