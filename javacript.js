function add(){
    var dollar = document.getElementById('dollar')
    var result = document.querySelector('div#result')
    if (dollar.value.length == 0){
        window.alert(`Please enter a dollar amount`)
    } else {
        let n = Number(dollar.value)
        let real = 5.14
        let tax = 1.08    
        result.innerHTML = `When converted to BRL, <br> ${n}&dollar; + 8% tax is = BRL R$${n*tax*real}`
    }
}