function showdeletenetwork(beforedel, afterdel) {
    console.log(beforedel, afterdel)
    let nodesnumbefore = document.getElementById('nodesnumbefore')
    let nodesnumafter = document.getElementById('nodesnumafter')
    let edgesnumbefore = document.getElementById('edgesnumbefore')
    let edgesnumafter = document.getElementById('edgesnumafter')
    let densitybefore = document.getElementById('densitybefore')
    let densityafter = document.getElementById('densityafter')
    let concombefore = document.getElementById('concombefore')
    let concomafter = document.getElementById('concomafter')
    let largestbefore = document.getElementById('largestbefore')
    let largestafter = document.getElementById('largestafter')
    let largestedgesbefore = document.getElementById('largestedgesbefore')
    let largestedgesafter = document.getElementById('largestedgesafter')
    let kcoresbefore = document.getElementById('kcoresbefore')
    let kcoresafter = document.getElementById('kcoresafter')
    let diameterbefore = document.getElementById('diameterbefore')
    let diameterafter = document.getElementById('diameterafter')
    let averagebefore = document.getElementById('averagebefore')
    let averageafter = document.getElementById('averageafter')
    let efficiencybefore = document.getElementById('efficiencybefore')
    let efficiencyafter = document.getElementById('efficiencyafter')

    nodesnumbefore.innerHTML = `<p>${beforedel[0]}</p>`
    nodesnumafter.innerHTML = `<p>${afterdel[0]}</p>`
    edgesnumbefore.innerHTML = `<p>${beforedel[1]}</p>`
    edgesnumafter.innerHTML = `<p>${afterdel[1]}</p>`
    concombefore.innerHTML = `<p>${beforedel[2]}</p>`
    concomafter.innerHTML = `<p>${afterdel[2]}</p>`
    largestbefore.innerHTML = `<p>${beforedel[3]}</p>`
    largestafter.innerHTML = `<p>${afterdel[3]}</p>`
    largestedgesbefore.innerHTML = `<p>${beforedel[4]}</p>`
    largestedgesafter.innerHTML = `<p>${afterdel[4]}</p>`
    kcoresbefore.innerHTML = `<p>${beforedel[5]}</p>`
    kcoresafter.innerHTML = `<p>${afterdel[5]}</p>`
    densitybefore.innerHTML = `<p>${beforedel[6]}</p>`
    densityafter.innerHTML = `<p>${afterdel[6]}</p>`
    diameterbefore.innerHTML = `<p>${beforedel[7]}</p>`
    diameterafter.innerHTML = `<p>${afterdel[7]}</p>`
    averagebefore.innerHTML = `<p>${beforedel[8]}</p>`
    averageafter.innerHTML = `<p>${afterdel[8]}</p>`
    efficiencybefore.innerHTML = `<p>${beforedel[9]}</p>`
    efficiencyafter.innerHTML = `<p>${afterdel[9]}</p>`
}