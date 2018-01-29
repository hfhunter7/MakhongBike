import { localKeyCheck } from './localExport';

export function returnLanguage(tkey, variable = {}) {

    const tkeys = tkey.split(".");

    const en = {
        "menu": {
            "app_name": "Training Center",
            "dashboard": "Dashboard",
            "courses": "Courses",
            "certificates": "Certificates",
            "exams": "Exams"
        }
    };

    return localKeyCheck(tkeys, en);
}