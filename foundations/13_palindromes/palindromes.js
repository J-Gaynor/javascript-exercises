const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    return string.toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('') === reversed.toLowerCase()
            .split('')
            .filter((character) => alphanumerical.includes(character))
            .join('');
};

// Do not edit below this line
module.exports = palindromes;
