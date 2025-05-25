function formatPhones(phones) {
    return phones.map(phone => {
        const lastDotIndex = phone.lastIndexOf('.');
        if (lastDotIndex === -1) {
            return phone.slice(0, -4) + '****';
        }
        const prefix = phone.slice(0, lastDotIndex + 1);
        const firstDigitAfterDot = phone[lastDotIndex + 1];
        return prefix + firstDigitAfterDot + '****';
    });
}

module.exports = {formatPhones};


const phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
];

const formatted = formatPhones(phones);


console.log(formatted);
