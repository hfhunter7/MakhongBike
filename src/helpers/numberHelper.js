export function returnPercentage(fullNumber,calNumber) {

    const questionNumber = calNumber;
    const questionCount = fullNumber;
    const percentage = (questionNumber * 100) / questionCount;

    if(questionCount === 0) {
        return 0;
    } else {
        return percentage;
    }
}

export function returnRoundNumber(number) {
    return Math.round(number * 100) / 100;
}

export function returnRoundNumberDown(number) {
    return Math.floor(number);
}

export function returnIntNumber(number) {
    return Math.round(number);
}

export function convertStringToNumber(string) {
    return parseInt(string,0);
}

export function returnTwoDigitsNumber(number) {
    return ('0' + number).slice(-2)
}

export function convertSecondsToMinutes(seconds) {

    return returnRoundNumberDown(seconds / 60)
}

export function convertFloatToInt(float) {
    return Math.trunc(float)
}

export function divideMinutesWithSeconds(seconds) {
    return seconds % 60
}

export function convertSecondsToTimeFormatHours(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (h === 1 ? " Hour " : " Hours ") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " Minute " : " Minutes ") : "";
    let sDisplay = s > 0 ? s + (s === 1 ? " Second" : " Seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

export function convertSoundSecondsToTimeFormatHours(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? (h < 10 ? ("0" + h) : h) : 0;
    let mDisplay = m > 0 ? (m < 10 ? ("0" + m) : m) : 0;
    let sDisplay = s > 0 ? (s < 10 ? ("0" + s) : s) : 0;
    return hDisplay + ":" + mDisplay + ":" + sDisplay;
}

export function ordinalSuffixOf(i) {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export function currencyFormat (num) {
	// return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	return "฿" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}