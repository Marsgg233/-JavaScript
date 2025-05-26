const { isFridayToday } = require('./task04');

describe('Тестирование функции isFridayToday', () => {
    test('1', () => { //должен выводить "Сегодня пятница!" при пятнице
        const fridayDate = new Date('2025-05-23T00:00:00Z');
        global.Date.now = jest.fn(() => fridayDate.valueOf());
        expect(isFridayToday()).toBe('Сегодня пятница!');
    });

    test('2', () => { //должен выводить "Завтра пятница!" при четверге
        const thursdayDate = new Date('2025-10-05T00:00:00Z');
        global.Date.now = jest.fn(() => thursdayDate.valueOf());
        expect(isFridayToday()).toBe('Завтра пятница!');
    });

    test('3', () => { //должен выводить "Пятница была вчера" при субботе
        const saturdayDate = new Date('2025-10-07T00:00:00Z');
        global.Date.now = jest.fn(() => saturdayDate.valueOf());
        expect(isFridayToday()).toBe('Пятница была вчера');
    });

    test('4', () => { //должен считать количество дней до пятницы
        const mondayDate = new Date('2025-10-02T00:00:00Z');
        global.Date.now = jest.fn(() => mondayDate.valueOf());
        expect(isFridayToday()).toBe('Пятница будет через 4 дня');
    });
});
