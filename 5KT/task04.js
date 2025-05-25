function isFridayToday() {
    const today = new Date(global.Date.now());
    const dayOfWeek = today.getDay();

    switch(dayOfWeek) {
        case 5: //Пятница
            return "Сегодня пятница!";
        case 4: //Четверг
            return "Пятница была вчера";
        case 6: //Суббота
            return "Завтра пятница!";
        default:
            const daysToFriday = (5 - dayOfWeek + 7) % 7;
            return `Пятница будет через ${daysToFriday} дня`;
    }
}

module.exports = { isFridayToday };

console.log(isFridayToday());