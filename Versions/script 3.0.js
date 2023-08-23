const tax = 1.07;
let kiloPrice;

// Function to fetch dollar conversion rates and update related elements
async function updateDollarInfo() {
    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const data = await res.json();
    const convert = data.USDBRL.ask;
    const high = data.USDBRL.high;
    const low = data.USDBRL.low;

    const container = document.getElementById('container-dollar')
    const dollar = document.getElementById('dollar');
    const result = document.querySelector('div#result')
    const pretax = document.querySelector('div#pretax')
    const weightInput = document.querySelector('input#weight')
    const result2 = document.querySelector('div#result2')
    const result3 = document.querySelector('div#result3')
    const result4 = document.querySelector('div#result4')
    const shipping = document.querySelector('input#shipping')
    const today = document.getElementById('dollar-now');
    const todayhigh = document.getElementById('dollar-high');
    const todaylow = document.getElementById('dollar-low');

    const n = Number(dollar.value)
    const real = convert*n
    const res1 = n*tax*convert     
    const kg = Number(weightInput.value)
    const res2  = kg*kiloPrice
    const res2real = kg*kiloPrice*convert
    const n3 = Number(shipping.value)
    const res3 = n3*convert
    const finale = Number(n*tax*convert+(kg*kiloPrice*convert)+(n3*convert))

    const todayBrl = Number(convert);
    const highBrl = Number(high);
    const lowBrl = Number(low);

    today.innerHTML = `Dollar = R$${todayBrl.toFixed(2)}`;
    todayhigh.innerHTML = `High = R$${highBrl.toFixed(2)}`;
    todaylow.innerHTML = `Low = R$${lowBrl.toFixed(2)}`;

    if (dollar.value.length >= 0){
        result4.innerHTML = `<br> Grand total R$${finale.toFixed(2)}`
        result2.innerHTML = ''
    }
    
    if (dollar.value.length == 0){
    pretax.innerHTML = ''
    result.innerHTML = 'Please enter a Dollar amount.'
    result2.innerHTML = 'Your result will go here'
    result4.innerHTML = ' '
} else {
    container.style.height = ''
    pretax.innerHTML = `&dollar;${n} TO BRL = R$${real.toFixed(2)}`
    result.innerHTML = `R&dollar;${real.toFixed(2)} + 7% tax = BRL R$${res1.toFixed(2)}`
    
}
    
}

// Function to update shipping-related elements
function updateShippingInfo() {
    const shipping = document.querySelector('input#shipping');
    const result2 = document.querySelector('div#result2');
    
    const n3 = Number(shipping.value);
    const res3 = n3 * convert;
    
    shipping.value.length == 0 ? result2.innerHTML = `` : result2.innerHTML = `Domestic shipping is $${n3}, In BRL that comes out to R$${res3.toFixed(2)}`
}

// Function to update weight-related elements
function updateWeightInfo() {
    const weightInput = document.querySelector('input#weight');
    const result3 = document.querySelector('div#result3');
    
    const kg = Number(weightInput.value);
    const res2 = kg * kiloPrice;
    const res2real = kg * kiloPrice * convert;
    
    weightInput.value.length == 0 ? result3.innerHTML = `` : result3.innerHTML = `Weight is ${kg}kgs. At $${kiloPrice}/kg = <br> INTL Shipping is $${res2.toFixed(2)} <br> INTL Shipping R$${res2real.toFixed(2)}`
}

// Function to create copy button
const copyButton = () => {
    if (dollar.value.length == 0){
        const copyDiv = document.getElementById('copyDiv')
        copyDiv.style.display = 'none'
    } else {
        const copyText = document.getElementById('copy') 
        copyDiv.style.display = 'block'
        copyText.addEventListener('click', () => {
        window.navigator.clipboard.writeText('R$' + finale.toFixed(2))
        });
    }
}
copyButton();

// Function to deal with standard text
function standardText(){

}

// Function to handle radio button changes
function handleRadioChange() {
    const radio70 = document.querySelector('input[value="70"]');
    const radio23 = document.querySelector('input[value="23"]');
    
    if (radio70.checked) {
        kiloPrice = 70;
    } else if (radio23.checked) {
        kiloPrice = 23;
    }
    
    updateWeightInfo();
}

// Function to handle submission
    function enterPress(event) {
        const btn = document.getElementById('button')
            btn.addEventListener('click', () =>{
            updateDollarInfo();
    })
        if (event.key === 'Enter') {
            updateDollarInfo();
        }
    }
    
    // Add event listener to call handleRadioChange when radio buttons change
    const radio70 = document.querySelector('input[value="70"]');
    const radio23 = document.querySelector('input[value="23"]');
    radio70.addEventListener('change', handleRadioChange);
    radio23.addEventListener('change', handleRadioChange);
    
    // Add event listener to call updateDollarInfo on keydown event
    document.addEventListener('keydown', enterPress);
    
    
    // Call the initial function to update dollar information
    updateDollarInfo();
