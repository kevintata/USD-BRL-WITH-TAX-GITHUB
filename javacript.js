const getDollar = async () =>{
    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const data = await res.json()
    var convert = data.USDBRL.ask
    var high = data.USDBRL.high
    var low = data.USDBRL.low


    var container =document.getElementById('container-dollar')
    var dollar = document.getElementById('dollar')
    var result = document.querySelector('div#result')
    var pretax = document.querySelector('div#pretax')
    var weight = document.querySelector('input#weight')
    var result2 = document.querySelector('div#result2')
    var result3 = document.querySelector('div#result3')
    var result4 = document.querySelector('div#result4')
    var shipping = document.querySelector('input#shipping')
    let n = Number(dollar.value)
    const real = convert*n
    const tax = 1.07
    let res1 = n*tax*convert     
    let n2 = Number(weight.value)
    const ppp = 30
    let res2  = n2*ppp
    let res2real = n2*ppp*convert
    let n3 = Number(shipping.value)
    let res3 = n3*convert
    let kg = n2*0.45
    let finale = n*tax*convert+(n2*ppp*convert)+(n3*convert)
    let today = document.getElementById('dollar-now')
    let todayhigh = document.getElementById('dollar-high')
    let todaylow = document.getElementById('dollar-low')
    let todayBrl = Number(convert)
    let highBrl = Number(high)
    let lowBrl = Number(low)

    today.innerHTML = `Dollar = R$${todayBrl.toFixed(2)}`
    todayhigh.innerHTML = `High = R$${highBrl.toFixed(2)}`
    todaylow.innerHTML = `Low = R$${lowBrl.toFixed(2)}`

    if(shipping.value.length == 0){
        result2.innerHTML = ``
    } else {
        result2.innerHTML = `Domestic shipping is $${n3}, In BRL that comes out to R$${res3.toFixed(2)}`
    }
    if (weight.value.length == 0){
        // result3.innerHTML = `Weight not informed.`
    } else {
        result3.innerHTML =  `Weight is ${n2}lbs. ${n2}lbs = ${kg.toFixed(2)}kg. At $30/lb = <br> INTL Shipping is $${res2.toFixed(2)} <br> INTL Shipping R$${res2real.toFixed(2)}`
    }
    if (dollar.value.length >= 0){
        result4.innerHTML = `<br> Grand total R$${finale.toFixed(2)}`
    }

    if (dollar.value.length == 0){
        result.innerHTML = 'Please enter a Dollar amount.'
        result2.innerHTML = 'Your result will go here'
        result4.innerHTML = ' '
    } else {
        container.style.height = ''
        // today.style.display = 'none'
        pretax.innerHTML = `&dollar;${n} TO BRL = R$${real.toFixed(2)}`
        result.innerHTML = `R&dollar;${real.toFixed(2)} + 7% tax = BRL R$${res1.toFixed(2)}`
    }

    if (todayBrl.toFixed(2) >= highBrl.toFixed(2)){
        today.style.color = 'red'
    }

    if (lowBrl.toFixed(2) >= todayBrl.toFixed(2)){
        today.style.color = 'rgb(30, 195, 55)'
    }

}
setInterval(getDollar, 100);