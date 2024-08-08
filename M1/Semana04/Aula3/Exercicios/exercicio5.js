// Verão: Dezembro (12), Janeiro (1), Fevereiro (2)
// Outono: Março (3), Abril (4), Maio (5)
// Inverno: Junho (6), Julho (7), Agosto (8)
// Primavera: Setembro (9), Outubro (10), Novembro (11)
function getSeason(month) {
    let season;

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Verão"
            break;

        case 3:
        case 4:
        case 5:
            season = "Outono"
            break;

        case 6:
        case 7:
        case 8:
            season = "Inverno"
            break;

        case 9:
        case 10:
        case 11:
            season = "Primavera"
            break;
        default:
            season = "Mês inválido"
    }

    return season
}

console.log(getSeason(0))