let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)
function calcularPreco(){
    let inQuilo = document.getElementById('inQuilo')
    let inConsumo = document.getElementById('inConsumo')
    let outValor = document.getElementById('outValor')
    let quilo = Number(inQuilo.value)
    let consumo = Number(inConsumo.value)
    let valor = Math.ceil(consumo/15)*quilo
    outValor.innerHTML = 'Valor a ser pago R$ '+valor.toFixed(2)
}