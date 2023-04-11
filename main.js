const boton = document.querySelector('button').addEventListener('click',() =>{
const input = parseFloat (document.querySelector('#monto').value);
const resultado = document.getElementById("resultado");



const select = document.querySelector('select');
 
 
const fetchDivisa = async() =>{
    try{
    const res =  await fetch('https://mindicador.cl/api/');
    const data =   await res.json();
let valorDolar = input / data.dolar.valor;
let valorEuro = input / data.euro.valor;
console.log(data);
    
    
 
if (select.value == 'usd'){
    resultado.textContent =`El resultado es ${valorDolar}`
}else if(select.value == 'eur'){
  
    resultado.textContent =`El resultado es ${valorEuro}`
}    
} catch(error){
    console.error(error);
    alert('Ocurrió un error');
}


}
fetchDivisa();

});




    
