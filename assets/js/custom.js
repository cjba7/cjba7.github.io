// window.onload = function() {
//   (function() {
//     document.onmousemove = handleMouseMove
//     function handleMouseMove(event) {
//       var posX = event.pageX, posY = event.pageY,
//         halfW = window.innerWidth / 2, halfH = window.innerHeight / 2,
//         offsetX = (posX - halfW) / halfW, offsetY = (halfH - posY) / halfH

//       var bgBaseX = 50, bgBaseY = 50 // in percent
//       $('html').css('background-position-x', bgBaseX + (offsetX * 7) + '%')
//       $('html').css('background-position-y', bgBaseY + (offsetY * 7) + '%')
//     }
//   })()
// }