$('.main-m').mouseenter(function(){
  $('.sub-m').stop().addClass('on')
})
$('.main-m').mouseleave(function(){
  $('.sub-m').stop().removeClass('.on')
})

// slide
$('.slide').eq(0).siblings().hide()
let idx = 0
setInterval(function(){
  idx ++

  if(idx===3)
    idx = 0

  $('.slide').fadeOut()
  $('.slide').eq(idx).fadeIn()
},3000)

// tab
$('.tablist ul li').click(function(){
  $('.tablis ul li').removeClass('on')
  $(this).addClass('on')

  let idx = $(this).index()
  $('.tab').hide()
  $('.tab').eq(idx).show()
})