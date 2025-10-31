// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(DOLARES){
    return (DOLARES)*153.95
}

function fromEuroToDollar(EURO){
    return (EURO)*1.07
}

function fromYenToPound(YENES){
    return (YENES)*0.0049
}

