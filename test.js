// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
const { fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
test('One euro should be 1.07 dollars',function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    

    // Esperamos que la suma de esos 2 números sea 23
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});
test('One dollar should be 153.95 Yenes',function()  {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 153.95;

    

    // Esperamos que la suma de esos 2 números sea 23
    expect(fromDollarToYen(3.5)).toBeCloseTo(538.825);
});
test('One Yen should be 0.0047 Pounds',function()  {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(3.5);
    const expected = 3.5 * 0.0047;

    

    // Esperamos que la suma de esos 2 números sea 23
    expect(fromYenToPound(3.5)).toBeCloseTo(0.01645);
});

