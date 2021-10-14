function dirigirEBeber (idade) {
    if (idade >= 18) {
        return "Já pode dirigir e beber"
    } else {
        return "Não pode dirigir, nem beber"
    }
}

console.log(dirigirEBeber(17))


function previsaoRodagem (quatidadeLitrosTanque, quilometragemMediaLitro) {
    return (quatidadeLitrosTanque * quilometragemMediaLitro) + " km" 
}

console.log(previsaoRodagem(5,10))