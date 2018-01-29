export function capitalizeText(str) {
	if (str && str.length >= 1) {
		let firstChar = str.charAt(0);
		let remainingStr = str.slice(1);
		str = firstChar.toUpperCase() + remainingStr;
	}

	return str
}

export function truncate_text(text, n) {
    return (text.length > n) ? text.substr(0, n - 1) + '...' : text;
}

export function status_review(status) {
    if (status.toLowerCase() === "awaiting_score") {
        return "Score yourself"
    } else if (status.toLowerCase() === "finished") {
        return "View answer"
    } else if (status.toLowerCase() === "unfinished") {
        return "Continue"
    } else {
        return status
    }
}

export function strip_html_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    // return str.replace(/<[^>]*>/g, '');
    return str.replace(/(<span>|<\/span>|<p>|<\/p>)/g, "");
}

