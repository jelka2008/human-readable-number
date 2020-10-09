module.exports = function toReadable(number) {
    const numStr = number.toString().split("").reverse().join("");
    const hundredS = (number / 100) >> 0;
    const tenS = ((number - hundredS * 100) / 10) >> 0;
    const unitS = number % 10;

    let rezStr = "";

    const zero = "zero";
    const arrayOneToNineteen = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrayTwentyToNinety = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";

    if (number === 0) {
        return zero;
    }
    if (hundredS !== 0 && number < 1000) {
        rezStr = arrayOneToNineteen[hundredS] + " " + hundred;
    }
    if (number % 100 >= 1 && number % 100 <= 9) {
        rezStr = rezStr + " " + arrayOneToNineteen[unitS];
    }
    if (number % 100 >= 10 && number % 100 <= 19) {
        rezStr = rezStr + " " + arrayOneToNineteen[number % 100];
    }
    if (number % 100 > 19) {
        rezStr =
            rezStr +
            " " +
            arrayTwentyToNinety[tenS] +
            " " +
            arrayOneToNineteen[unitS];
    }
    return rezStr.trim();
};
