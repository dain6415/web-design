// menu
$('li.main-m').mouseenter(function(){
  $('ul.sub-m').stop().slideDown(500)
  $('header').addClass('on')
})
// menu
$('li.main-m').mouseleave (function(){
  $('ul.sub-m').stop().slideUp(200)
  $('header').removeClass('on')
})

// slide
$('.slide').eq(0).siblings().hide()/* 형제중 첫번째를 보여라? */
let idx = 0
setInterval(function(){ /* 반복하겠다 */
  idx ++

  if(idx === 3){
    idx = 0
  }

  $('.slide').fadeOut()
  $('.slide').eq(idx).fadeIn()
}, 3000)

// popup
$('.modal').click(function(){
  $('.popup').show()
})
$('.close').click(function(){
  $('.popup').hide()
})