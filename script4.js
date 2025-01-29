let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)
function calcularPreco(){
    let inQuilo = document.getElementById('inQuilo')
    let inConsumo = document.getElementById('inConsumo')
    let outValor = document.getElementById('outValor')
    let outDesconto = document.getElementById('outDesconto')

    let quilo = (inQuilo.value)
    let consumo = Number(inConsumo.value)

    let desconto = consumo/2
    let valor = consumo * 2 + desconto
    outValor.innerHTML = quilo+' - Leve 3 por R$ '+valor
    outDesconto.innerHTML = 'O 3º item vale R$ '+desconto
}