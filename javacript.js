// function add(){
//     var dollar = document.getElementById('dollar')
//     var result = document.querySelector('div#result')
//     var pretax = document.querySelector('div#pretax')
//     var weight = document.querySelector('input#weight')
//     var result2 = document.querySelector('div#result2')
//     var result3 = document.querySelector('div#result3')
//     var grand = document.querySelector('div#grand')
//     if (dollar.value.length == 0){
//         window.alert(`Please enter a dollar amount`)
//     } else {
//         let n = Number(dollar.value)
//         let real = 5.18
//         let tax = 1.08    
//         let res1 = `$${n*tax*real}`
//         result.innerHTML = `When converted to BRL, <br> ${n}&dollar; + 8% tax is = BRL R$${n*tax*real}`
//         pretax.innerHTML = `Pre-Tax = R$${n*real}`
//     }
//     if (weight.value.length == 0){
//         result2.innerHTML = `Weight not informed`
//     } else {
//         let n2 = Number(weight.value)
//         let ppp = 30
//         let res2  = `$${n2*ppp}`
//         result2.innerHTML =  `Product weight is ${n2}lbs. Shipping will come out to ${res2}`
//     }
//     if (dollar.value.length >= 0 && weight.value >= 0){
//         result3.innerHTML = `${res}`
//     }
// }
// function weight(){
//     var weight = document.querySelector('weight')
//     var result2 = document.querySelector('div#result2')
//     if (weight.value.length == 0){
//         result2.innerHTML = `Weight not informed`
//     } else {
//         let n2= Number(weight.value)
//         let ppp = 30
//         result2.innerHTML = `Weight `
//     }
// }

function add(){
    var dollar = document.getElementById('dollar')
    var result = document.querySelector('div#result')
    var pretax = document.querySelector('div#pretax')
    var weight = document.querySelector('input#weight')
    var result2 = document.querySelector('div#result2')
    var result3 = document.querySelector('div#result3')
    var result4 = document.querySelector('div#result4')
    var shipping = document.querySelector('input#shipping')
    let n = Number(dollar.value)
    let real = 5.50
    let tax = 1.08    
    let res1 = n*tax*real     
    let n2 = Number(weight.value)
    let ppp = 30
    let res2  = n2*ppp
    let res2real = n2*ppp*real
    let n3 = Number(shipping.value)
    let res3 = n3*real
    let finale = n*tax*real+(n2*ppp*real)+(n3*real)
    if (dollar.value.length == 0){
        window.alert(`Please enter a dollar amount`)
    } else {
        pretax.innerHTML = `Pre-Tax = R$${n*real.toFixed(2)}`
        result.innerHTML = `${n}&dollar; + 8% tax is = BRL R$${res1.toFixed(2)}`
    }
    if(shipping.value.length == 0){
        result2.innerHTML = `Domestic shipping not informed.`
    } else {
        result2.innerHTML = `Domestic shipping is $${n3}, in BRL that comes out to ${n3*tax*real.toFixed(2)}`
    }
    if (weight.value.length == 0){
        result3.innerHTML = `Weight not informed.`
    } else {
        result3.innerHTML =  `Weight is ${n2}lbs.<br> Shipping will come out to $${res2.toFixed(2)}.
                                <br> INTL Shipping R$${res2real.toFixed(2)}`
    }
    if (dollar.value.length >= 0 && weight.value.length > 0){
        result4.innerHTML = `Grand total R$${finale.toFixed(2)}`
    }
}