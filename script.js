const tax = 1.07
let kiloPrice;

const screen = window.matchMedia("(max-width: 690px)")
const container = document.getElementById('container-dollar')
const form = document.querySelector('form')
const dollar = document.getElementById('dollar')
const result = document.querySelector('div#result')
const pretax = document.querySelector('div#pretax')
const weightInput = document.querySelector('input#weight')
const result2 = document.querySelector('div#result2')
const result3 = document.querySelector('div#result3')
const result4 = document.querySelector('div#result4')
const shipping = document.querySelector('input#shipping')
const radio70 = document.querySelector('input[value="70"]');
const radio23 = document.querySelector('input[value="23.5"]');
const today = document.getElementById('dollar-now')
const todayhigh = document.getElementById('dollar-high')
const todaylow = document.getElementById('dollar-low')

const getDollar = async () => {
const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
const data = await res.json()
const convert = data.USDBRL.ask
const high = data.USDBRL.high
const low = data.USDBRL.low


const n = Number(dollar.value)
const real = convert*n
const res1 = n*tax*convert     
const kg = Number(weightInput.value)
const res2  = kg*kiloPrice
const res2real = kg*kiloPrice*convert
const n3 = Number(shipping.value)
const res3 = n3*convert
const finale = n*tax*convert+(kg*kiloPrice*convert)+(n3*convert)
const todayBrl = Number(convert)
const highBrl = Number(high)
const lowBrl = Number(low)

today.innerHTML = `Dollar = R$${todayBrl.toFixed(2)}`
todayhigh.innerHTML = `High = R$${highBrl.toFixed(2)}`
todaylow.innerHTML = `Low = R$${lowBrl.toFixed(2)}`


radio70.checked == true ? kiloPrice = 70 : kiloPrice = 23.5;
radio70.addEventListener('click', () =>{
    getDollar();
})
radio23.addEventListener('click', () =>{
    getDollar();
})

function mediaQuery(){
    if (screen.matches) {
        shipping.value.length == 0 ? result2.innerHTML = `` : result2.innerHTML = ``

        // result3.innerHTML = `Weight is ${kg}kgs. At $${kiloPrice}/kg = <br> INTL Shipping is $${res2.toFixed(2)} <br> INTL Shipping R$${res2real.toFixed(2)}`
        
        form.innerHTML = `
        <label>
            <input type="radio" name="kiloNumber" value="70" checked>
            70
        </label>
        <label>
            <input type="radio" name="kiloNumber" value="23.5">
            23.5
        </label>`
    } else if (!screen.matches){
        // shipping.value.length == 0 ? result2.innerHTML = `` : result2.innerHTML = `Domestic shipping is $${n3}, In BRL that comes out to R$${res3.toFixed(2)}`

        form.innerHTML = `
        <label>
            <input type="radio" name="kiloNumber" value="70" checked>
            70
        </label>
        <br>
        <label>
            <input type="radio" name="kiloNumber" value="23.5">
            23.5
        </label>`
    }
}
screen.addListener(mediaQuery)
mediaQuery(screen)


weightInput.value.length == 0 ? result3.innerHTML = `` : result3.innerHTML = `Weight is ${kg}kgs. At $${kiloPrice}/kg = <br> INTL Shipping is $${res2.toFixed(2)} <br> INTL Shipping R$${res2real.toFixed(2)}`


if (dollar.value.length >= 0){
    result4.innerHTML = `<br> Grand total R$${finale.toFixed(2)}`
}

    dollar.value.length == 0
    ? (pretax.innerHTML = '',
    result.innerHTML = 'Please enter a Dollar amount.',
    result2.innerHTML = 'Your result will go here',
    result4.innerHTML = ' ')
    : (container.style.height = '',
    pretax.innerHTML = `&dollar;${n} TO BRL = R$${real.toFixed(2)}`,
    result.innerHTML = `R&dollar;${real.toFixed(2)} + 7% tax = BRL R$${res1.toFixed(2)}`);



// High and Low fluctuation 

    todayBrl.toFixed(2) >= highBrl.toFixed(2) 
    ? 
    today.style.color = 'red' 
    : (
    lowBrl.toFixed(2) >= todayBrl.toFixed(2) 
    ? 
    today.style.color = 'red' 
    : 
    today.style.color = ''
    );


if (todayBrl.toFixed(2) >= highBrl.toFixed(2) && lowBrl.toFixed(2) >= todayBrl.toFixed(2)){
    today.style.color = '#171717'
    todayhigh.innerHTML = 'Market is closed.'
    todayhigh.style.color = '#202020'
    todaylow.style.display = 'none'
}

// Copy Button
if (dollar.value.length == 0){
    const copyDiv = document.getElementById('copyDiv')
    copyDiv.style.display = 'none'
} else{
    const copyText = document.getElementById('copy') 
    copyDiv.style.display = 'block'
    copyText.addEventListener('click', () => {
        window.navigator.clipboard.writeText('R$' + finale.toFixed(2))
    });
}

function enterPress(event) {
    if (event.key === 'Enter'){
        getDollar();
    }
}

    document.addEventListener('keydown', enterPress);
    const btn = document.getElementById('button')
    btn.addEventListener('click', () =>{
        getDollar();
    })

}
getDollar()