module.exports = function toReadable(number) {
    function toReadableUnits(number) {
        const digital = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        return digital[number];
    }

    function toReadableLessTwenty(number) {
        const digital = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        return digital[number - 10];
    }

    function toReadableLessHundreds(number) {
        const digital = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        return digital[number - 2];
    }

    function toReadableLessOneHundred(number) {
        result = toReadableLessHundreds(parseInt(number.toString()[0]));
        if (number.toString()[1] !== '0') {
            result += (' ' + toReadableUnits(parseInt(number.toString()[1])));
        }
        return result
    }

    let result;

    if (number < 10) {
        return toReadableUnits(number);
    }

    if (number < 20) {
        return toReadableLessTwenty(number);
    }

    if (number < 100) {
        return toReadableLessOneHundred(number);
    }

    if (number < 1000) {
        let resultHundred = toReadableUnits(parseInt(number.toString()[0])) + ' hundred';
        let tempNumber = number.toString().slice(-2);
        let resultNumber;
        if (parseInt(tempNumber) < 10) {
            resultNumber = toReadableUnits(tempNumber.slice(-1));
            if (resultNumber !== 'zero') {
                resultHundred += (' ' + resultNumber);
            }
        } else if (parseInt(tempNumber) < 20) {
            resultNumber = toReadableLessTwenty(tempNumber);
            resultHundred += (' ' + resultNumber);
        } else {
            resultHundred += (' ' + toReadableLessOneHundred(tempNumber));
        }
        return resultHundred;
    }
    return result;
}
