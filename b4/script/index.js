// manu
$('.main-m').mouseenter(function(){
  $('.sub-m').stop().slideDown(500)
  $('header').addClass('on')
})
$('.main-m').mouseleave(function(){
  $('.sub-m').stop().slideUp(300)
  $('header').removeClass('on')
})

// slide
// setInterval(function(){
//   $('.slide-wrap').stop().animate({'left':'-100%'},function(){
//   $('.slide:first').appendTo('.slide-wrap')
//   $('.slide-wrap').css({'left':'0%'})
//   })
// },3000)
setInterval(function(){
  $('.slide-wrap').stop().animate({'left':'-100%'},function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0%'})
  })
},1000)
// popup
$('.modal').click(function(){
  $('.popup').fadeIn()
})
$('.close').click(function(){
  $('.popup').fadeOut()
})