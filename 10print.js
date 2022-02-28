
/*
  Modifications that I made:
  - 
*/

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 200)
  let output = ''
  for (let i = 0; i < w; i++) {
    const num = Math.random()*100;
    const cols = ['\x1b[90m', '\x1b[91m', '\x1b[92m', '\x1b[93m', 
                  '\x1b[94m', '\x1b[95m', '\x1b[96m', '\x1b[97m', 
                  '\x1b[98m', '\x1b[99m', '\x1b[100m', '\x1b[101m', 
                  '\x1b[102m', '\x1b[103m', '\x1b[104m', '\x1b[105m']
    const c = Math.floor(Math.random()*cols.length);         
    if (num < 3){
      output += '\x1b[37m' + 'a' 
    }
    else if (num < 6 && num > 3){
      output += '\x1b[37m' + 'r'
    }
    else if (num < 9 && num > 6){
      output += '\x1b[37m' + 't'
    }
    else if (num < 60) {
      output += cols[c] + '🬀' 
    } 
    else {
      output += cols[c] +'┼'
    }
  }
  console.log(output)
}

draw()