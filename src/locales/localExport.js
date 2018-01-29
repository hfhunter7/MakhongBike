export function localKeyCheck(tkeys, lang) {

    const emptyTransalation = "empty translation";

    if (tkeys.length === 1) {
        const exportKey = `${tkeys[ 0 ]}`;
        return lang[ exportKey ] ? `${lang[ exportKey ]}` : emptyTransalation;
    } else if (tkeys.length === 2) {
        const exportKey1 = `${tkeys[ 0 ]}`;
        const exportKey2 = `${tkeys[ 1 ]}`;
        if (lang[ exportKey1 ] === undefined || lang[ exportKey1 ][ exportKey2 ] === undefined) {
            return emptyTransalation;
        } else {
            return `${lang[ exportKey1 ][ exportKey2 ]}`;
        }
    }
}