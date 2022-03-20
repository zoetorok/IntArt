let total = 100
let i = 0


function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)
}

let r = Math.random()*200
let b = Math.random()*200
let g = Math.random()*200

function draw () {
  background(0, 0, 0, 10)
  i += 0.5
  let offsetX = width / 2
  let offsetY = height / 2
  let radius = 100
  let x = sin(i * 0.1) * radius + offsetX
  let y = cos(i * 0.1) * radius + offsetY
  let d = 30 
  
  let rInterval = 0
  console.log(r)
  let bInterval = 0
  console.log(b)
  let gInterval = 0
  console.log(g)

  if(r + rInterval < 226){
    rInterval++
    console.log("r " + rInterval)
  }
  else if((r + rInterval > 226) && b + bInterval < 226){
    bInterval++
    console.log("b " + bInterval)
  }
  else if ((r + rInterval > 226) && (b + bInterval > 226) && g + gInterval < 226){
    gInterval++
    console.log("g " + gInterval)
  }
  else {
    rInterval = 0
    bInterval = 0
    gInterval = 0
  }
  fill(r+=rInterval, b+=bInterval, g+=gInterval)
  ellipse(x, y, d)
  
}


draw()