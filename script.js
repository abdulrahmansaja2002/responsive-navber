$(".toggle-btn").click(function(){
  $(this).find('span:eq(0)').toggleClass('rotate45');
  $(this).find('span:eq(1)').toggleClass('dimmed');
  $(this).find('span:eq(2)').toggleClass('rotate-45');
  $("nav").children('ul').toggleClass('slide');
  console.log($("nav").children('ul').html());
})