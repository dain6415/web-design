// menu
$('li.main-m').mouseenter(function(){
  $(this).find('.sub-m').stop().slideDown()
})
$('li.main-m').mouseleave(function(){
  $(this).find('.sub-m').stop().slideUp()
})

// slide
$('.slide').eq(0).siblings().hide() /* 변수설정 */
let idx = 0

setInterval(function(){
  idx ++

  if(idx === 3){
    idx = 0
  }
  $('.slide').fadeOut()
  $('.slide').eq(idx).fadeIn()
},3000)

// tab
$('.tablist ul li').click(function(){
  $('.tablist ul li').removeClass('on')
  $(this).addClass('on')

  let idx = $(this).index()

  $('.tab').hide()
  $('.tab').eq(idx).show()
})


// popup
$('.modal').click(function(){
  $('.popup').fadeIn()
})
$('.close').click(function(){
  $('.popup').fadeOut()
})