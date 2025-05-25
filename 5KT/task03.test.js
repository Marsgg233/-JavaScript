const { kingSaid } = require('./task03');

describe('Тестирование функции kingSaid', () => {
    test('1"', () => { //должен вернуть неизменённую строку начинающуюся с Король сказал:
        const message = 'Король сказал: Привет';
        const result = kingSaid(message);
        expect(result).toBe(message);
    });

    test('2', () => { //должен дополнить префиксом "Король сказал:", если строка не начинается с него
        const message = 'Привет';
        const expected = 'Король сказал: Привет';
        const result = kingSaid(message);
        expect(result).toBe(expected);
    });
});