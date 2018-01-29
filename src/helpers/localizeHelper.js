import { returnLanguage as EN } from '../locales/en';
import { returnLanguage as TH } from '../locales/th';

export function T(tkey, variable = {}) {
	if (localStorage.getItem('lang')) {
		const lang = localStorage.getItem('lang');
		if (lang === 'en') {
			return EN(tkey, variable);
		} else if (lang === 'th') {
			return TH(tkey, variable);
		}
	} else {
		return EN(tkey, variable);
	}

}