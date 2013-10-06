//init global variables
var TaskList = new Array();
var tempTask = null;
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
      $('#myModal').children().children().remove();
      $('#myModal').children().append(html);
      $('#myModal').modal('show');
    });
  });
  refreshActionList = function(){
    var $actionList = $('#actionlist');
    for(var i=0; i< TaskList.length; i++){
      var item = "<div class=\"alert alert-info\">";
      for(var propt in TaskList[i]){
        item = item + propt + ":" + TaskList[i][propt] + " ";
      }
      $actionList.append(item);
    }
  }
});