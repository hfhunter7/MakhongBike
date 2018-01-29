export function returnIconForSubject(subject) {
    switch(subject) {
        case "listening":
            return "headset";
        case "speaking":
            return "record_voice_over";
        case "writing":
            return "edit";
        case "reading":
            return "import_contacts";
        default:
            return "pause_circle_filled"
    }
}