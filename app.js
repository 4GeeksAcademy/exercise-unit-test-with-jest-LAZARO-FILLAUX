// One euro is:

// VIENDO QUE LA CONVERSIÓN ERA MÁS DIRECTA HE HECHO UN SISTEMA PARA QUE SEA MÁS DIRECTO
//DICIENDO QUE :
//UN DOLAR VALE 153.95 YENES 
// UN EURO VALE 1.07 DOLARES ACTUALMENTE (NO CAMBIA)
// UN YEN VALE 0.0049 POUNDS
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a, b) => {
    return a + b;
};

function fromDollarToYen(DOLARES){
    let valueinYen = (DOLARES)*153.95;
    return valueinYen;
}


function fromEuroToDollar(EURO){
    let valueinDollar = (EURO)*1.07;
    return valueinDollar;
}

function fromYenToPound(YENES){
    let valueinPounds = (YENES)*0.0049;
    return valueinPounds;
}

module.exports = { sum, fromDollarToYen ,fromEuroToDollar,fromYenToPound }

