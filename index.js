function dwarfRollCall(dwarves) {
  let empty = ''
  for (let i = 0; i < dwarves.length; i++) {
    let counter = i + 1
    let name = dwarves[i]
    empty += `${counter}. ${name} `
  }
  return empty
}

function summonCaptainPlanet(planeteerCalls) {
  let arr = []
  let upperArr = []
  
  for (let i = 0; i < planeteerCalls.length; i++) {
    let inter = planeteerCalls[i]
    let up = ''
    for (let j = 0; j < inter.length; j++) {
      up += inter[j].toUpperCase()
    }
    upperArr.push(up)
  }
  
  
  for (let i = 0; i < upperArr.length; i ++) {
  let holder = upperArr[i] + '!'
  arr.push(holder)
  }
  return arr
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    let holder = words[i]
    if (holder.length > 4) {
    return true
    }
    }
    return false
  }

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    let holder = foods[i]
    if (holder === 'gouda') {
      return holder
    }
    if (holder === 'cheddar') {
      return holder
    }
    if (holder === 'camembert') {
      return holder
    }
  }
  return 'no cheese!'
}

