let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)
function calcularPreco(){
    let inQuilo = document.getElementById('inQuilo')
    let inConsumo = document.getElementById('inConsumo')
    let outValor = document.getElementById('outValor')
    let Nome = String(inQuilo.value)
    let consumo = Number(inConsumo.value)
    let valor = Math.floor(consumo)*2
    
    outValor.innerHTML = 'Leve duas '+Nome+' por apenas R$ '+valor.toFixed(2)
}