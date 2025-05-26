function isFridayToday() {
    const today = new Date(global.Date.now());
    const dayOfWeek = today.getDay(); // Вс-0, Пн-1, Вт-2, Ср-3, Чт-4, Пт-5, Сб-6  

    switch(dayOfWeek) {
        case 5:
            return "Сегодня пятница!";
        case 4:
            return "Завтра пятница!";
        case 6:
            return "Пятница была вчера";
        default:
            const daysToFriday = (5 - dayOfWeek + 7) % 7;
            return `Пятница будет через ${daysToFriday} дня`;
    }
}

module.exports = { isFridayToday };

console.log(isFridayToday());
