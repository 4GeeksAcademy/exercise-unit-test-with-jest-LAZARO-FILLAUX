// One euro is:


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

