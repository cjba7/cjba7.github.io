window.onload = function() {
  console.log("Loaded!");

  (function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
      var dot, eventDoc, doc, body, pageX, pageY
      event = event || window.event

      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document
        doc = eventDoc.documentElement
        body = eventDoc.body

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0)
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 )
      }

      var posX = event.pageX, posY = event.pageY,
        halfW = window.innerWidth / 2, halfH = window.innerHeight / 2,
        offsetX = (posX - halfW) / halfW, offsetY = (halfH - posY) / halfH

      console.log('offsetX', offsetX)
      console.log('offsetY', offsetY)

      var bgBaseX = 50, bgBaseY = 50 // in percent
      $('html').css('background-position-x', bgBaseX + (offsetX * 7) + '%')
      $('html').css('background-position-y', bgBaseY + (offsetY * 7) + '%')
    }
  })()
}