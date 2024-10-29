// menu
$('li.main-m').mouseenter(function(){
  $(this).find('.sub-m').stop().slideDown()
})
$('li.main-m').mouseleave(function(){
  $(this).find('.sub-m').stop().slideUp()
})


// slide
setInterval(function(){
  $('.slide-wrap').animate({'left':'-100%'},function(){
  $('.slide:first').appendTo('.slide-wrap')
  $('.slide-wrap').css({'left':'0%'})
  })
},3000)


// tab
$('.tablist ul li').click(function(){
  $('.tablist ul li').removeClass('on')
  $(this).addClass('on')

  let idx = $(this).index() /* 변수 */

  $('.tab').hide()
  $('.tab').eq(idx).show()
})


// popup
$('.modal').click(function(){
  $('.popup').show()
})
$('.close').click(function(){
  $('.popup').hide()
})