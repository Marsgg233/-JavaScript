function getInfo(prices) {
    let countStartsWithPrice = 0;
    let countEndsWithDollar = 0;

   
    for (let item of prices) {
        if (item.startsWith('Цена')) {
            countStartsWithPrice++;
        }
        if (item.endsWith('$')) {
            countEndsWithDollar++;
        }
    }

    
    return [countStartsWithPrice, countEndsWithDollar];
}

module.exports = { getInfo };

const prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$'
];

console.log(getInfo(prices));