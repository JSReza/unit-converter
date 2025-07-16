let lengthInput = document.getElementById('length')
let massInput = document.getElementById('mass')
let volumeInput = document.getElementById('volume')

const lengthSubmit = document.getElementById('submit-length')
const massSubmit = document.getElementById('submit-mass')
const volumeSubmit = document.getElementById('submit-volume')

const lengthClear = document.getElementById('clear-length')
const massClear = document.getElementById('clear-mass')
const volumeClear = document.getElementById('clear-volume')

let outputLength = document.getElementById('output-length')
let outputMass = document.getElementById('output-mass')
let outputVolume = document.getElementById('output-volume')

lengthSubmit.addEventListener('click', function(e){
    e.preventDefault()
    const feet = document.getElementById('feet')
    const meters = document.getElementById('meters')
    if((parseInt(lengthInput.value) > 0)&&((meters.checked)||(feet.checked))){
        if(meters.checked){
            let input = parseInt(lengthInput.value)
            let output = metersToFeet(input)
            outputLength.textContent = `${input} meters is ${output.toFixed(2)} feet`
            lengthInput.value =''

        }else{
            let input = parseInt(lengthInput.value)
            let output = feetToMeters(input)
            outputLength.textContent = `${input} feet is ${output.toFixed(2)} meters`
            lengthInput.value =''
        }

    }else{
        alert('enter a valid input and pick the initial unit that you want to convert from')
    }
})

massSubmit.addEventListener('click', function(e){
    e.preventDefault()
    const lbs = document.getElementById('kilos')
    const kilos = document.getElementById('pounds')
    if((parseInt(massInput.value) > 0) && ((lbs.checked)||(kilos.checked))){
        if(kilos.checked){
            let input = parseInt(massInput.value)
            let output = lbsToKg(input)
            outputMass.textContent = `${input} pounds is ${output.toFixed(2)} kilograms`
            massInput.value = ''
        }else{
            let input = parseInt(massInput.value)
            let output = kgToLbs(input)
            outputMass.textContent = `${input} kilograms is  ${output.toFixed(2)} pounds`
            massInput.value = ''
        }

    }else{
        alert('enter a valid input and pick the initial unit that you want to convert from')
    }
    
})

volumeSubmit.addEventListener('click', function(e){
    e.preventDefault()
    const liters = document.getElementById('liters')
    const gallons = document.getElementById('gallons')
    if((parseInt(volumeInput.value))&&((liters.checked)||(gallons.checked))){
        if(liters.checked){
            let input = parseInt(volumeInput.value)
            let output = litersToGallons(input)
            outputVolume.textContent = `${input} liters is ${output.toFixed(2)} gallons`
            volumeInput.value = ''
        }else{
            let input = parseInt(volumeInput.value)
            let output = gallonsToLiters(input)
            outputVolume.textContent = `${input} gallons is ${output.toFixed(2)} liters`
            volumeInput.value = ''

        }
    }else{
        alert('enter a valid input and pick the initial unit that you want to convert from')
    }
    
})

lengthClear.addEventListener('click', function(){
    const feet = document.getElementById('feet')
    const meters = document.getElementById('meters')
    lengthInput.value = ''
    feet.checked = false
    meters.checked = false
    outputLength.textContent = ''
})

massClear.addEventListener('click', function(){
    const lbs = document.getElementById('kilos')
    const kilos = document.getElementById('pounds')
    massInput.value = ''
    lbs.checked = false
    kilos.checked = false
    outputMass.textContent = ''
})

volumeClear.addEventListener('click', function(){
    const liters = document.getElementById('liters')
    const gallons = document.getElementById('gallons')
    volumeInput.value = ''
    liters.checked = false
    gallons.checked = false
    outputVolume.textContent = ''
})