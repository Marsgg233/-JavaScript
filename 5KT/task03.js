function kingSaid(str) {
    if (str.startsWith('Король сказал:')) {
        return str;
    } else {
        return `Король сказал: ${str}`;
    }
}

module.exports = { kingSaid };

console.log(kingSaid("сегодня хорошая погода"));