const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const total = document.querySelector('.total');
const totalInterest = document.querySelector('.totalInterest');
const loader = document.getElementById('loader');
const output = document.getElementById('output');
const btn = document.querySelector('.btn');
const amountOutput = document.querySelector('.amountOutput');


btn.addEventListener('click', evaluate);


function evaluate(e) {

    e.preventDefault();

    let amountValue = +amount.value;
    let interestValue = +interest.value;
    let yearsValue = +years.value;
    amount.value = '';
    interest.value = '';
    years.value = '';


    loader.style.display = 'block';

     setTimeout(loaderOff, 500);

     function loaderOff() {
        loader.style.display = 'none';
     }

     setTimeout(outputF, 501);

     function outputF() {
         output.classList.add('output')
        let monPer = interestValue / 1200;
        console.log(monPer);
        let ka = (monPer * (1 + monPer)**(yearsValue*12))/((1 + monPer)**(yearsValue*12) - 1)
        amountOutput.value = Math.floor(ka * amountValue);
        total.value = Math.floor(ka * amountValue * yearsValue * 12) ;
        console.log(totalInterest);
        totalInterest.value = Math.floor(ka * amountValue * yearsValue * 12) ;
        console.log(Math.floor(ka * amountValue) * yearsValue * 12);
     }
   

}
