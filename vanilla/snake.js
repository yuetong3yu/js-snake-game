;(function (window) {
  // velocity
  let xVelocity = 0
  let yVelocity = 0
  // position
  let xPosition = 10
  let yPosition = 10

  const gridSize = 20
  const gridCount = 20

  let applePositionX = 15
  let applePositionY = 15

  const trail = []
  let tailLen = 5

  window.onload = () => {
    const canvas = document.getElementById('snake')
    const ctx = canvas.getContext('2d')

    // listen keys
    document.addEventListener('keydown', keyDown)

    // refresh canvas
    setInterval(() => game(ctx, canvas), 1000 / 15)
  }

  function game(ctx, canvasDom) {
    console.log('game')
    xPosition += xVelocity
    yPosition += yVelocity
    if (xPosition < 0) {
      xPosition = gridCount - 1
    }
    if (xPosition >= gridCount) {
      xPosition = 0
    }
    if (yPosition < 0) {
      yPosition = gridCount - 1
    }
    if (yPosition >= gridSize) {
      yPosition = 0
    }

    // background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height)
    // snake
    ctx.fillStyle = 'lime'
    for (let i = 0; i < trail.length; i++) {
      ctx.fillRect(
        trail[i].x * gridSize,
        trail[i].y * gridSize,
        gridSize - 2,
        gridSize - 2
      )
      if (trail[i].x == xPosition && trail[i].y == yPosition) {
        tailLen = 5
      }
    }
    trail.push({
      x: xPosition,
      y: yPosition,
    })
    while (trail.length > trail) {
      trail.shift()
    }
    // apple
    ctx.fillStyle = 'red'
    ctx.fillRect(
      applePositionX * gridSize,
      applePositionY * gridSize,
      gridSize - 2,
      gridSize - 2
    )
  }

  function keyDown(e) {
    switch (e.keyCode) {
      case 37: {
        xVelocity = -1
        yVelocity = 0
        break
      }
      case 38: {
        xVelocity = 0
        yVelocity = -1
        break
      }
      case 39: {
        xVelocity = 1
        yVelocity = 0
        break
      }
      case 40: {
        xVelocity = 0
        yVelocity = 1
        break
      }
    }
  }
})(window)
