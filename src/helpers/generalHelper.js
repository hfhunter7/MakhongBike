export function scrollToElement(elementId) {
	// location.href = '#';
	// location.href = '#' + elementId;
}

export function isObjectEmpty(object) {
	return Object.keys(object).length === 0 && object.constructor === Object;
}

export function checkNull(key,value){
	if(key === undefined || key === ''){
		return value;
	}else{
		return key;
	}
}
export function returnViewportWidth() {
	let w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[ 0 ],
		x = w.innerWidth || e.clientWidth || g.clientWidth;
	//y = w.innerHeight|| e.clientHeight|| g.clientHeight;

	return x;
}

export function addDisableBodyModalBgClass() {
	let body = document.getElementsByTagName('body')[ 0 ];
	body.className += ' disable-modal-bg';
}

export function deleteDisableBodyModalBgClass() {
	let body = document.getElementsByTagName('body')[ 0 ];
	body.className = '';
}

export function getOnlyDateSting(dateTime) {
	const dateArray = dateTime !== null ? dateTime.split(' ') : [ 0 ];
	return dateArray[ 0 ];
}

function str_pad_left(string, pad, length) {
	return (new Array(length + 1).join(pad) + string).slice(-length);
}

export function returnMinutesStingFromSeconds(seconds) {
	const minutes = Math.floor(seconds / 60);
	//const hours = Math.floor(minutes / minutes);

	const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);

	return finalTime;
}

export function showErrorSnackBar(message) {
	let snackbarContainer = document.querySelector('#error-snackBar');
	const data = { message: message };
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

export const shareImageObject = {
	0: 'http://res.cloudinary.com/testhero2/image/upload/v1486614854/0_aj2as7.png',
	1: 'http://res.cloudinary.com/testhero2/image/upload/v1486613580/1_mu1say.png',
	2: 'http://res.cloudinary.com/testhero2/image/upload/v1486613585/2_xajr6a.png',
	3: 'http://res.cloudinary.com/testhero2/image/upload/v1486613582/3_jnbzy1.png',
	4: 'http://res.cloudinary.com/testhero2/image/upload/v1486613584/4_sbfrtd.png',
	5: 'http://res.cloudinary.com/testhero2/image/upload/v1486613583/5_zgvugw.png',
	6: 'http://res.cloudinary.com/testhero2/image/upload/v1486613581/6_j0qapa.png',
	7: 'http://res.cloudinary.com/testhero2/image/upload/v1486613576/7_mfdrfm.png',
	8: 'http://res.cloudinary.com/testhero2/image/upload/v1486613582/8_trfv5d.png',
	9: 'http://res.cloudinary.com/testhero2/image/upload/v1486613577/9_tmjg9o.png',
	10: 'http://res.cloudinary.com/testhero2/image/upload/v1486613584/10_tgzoa5.png',
	11: 'http://res.cloudinary.com/testhero2/image/upload/v1486613580/11_jtgdco.png',
	12: 'http://res.cloudinary.com/testhero2/image/upload/v1486613576/12_fjiryp.png',
	13: 'http://res.cloudinary.com/testhero2/image/upload/v1486613579/13_axqgsg.png',
	14: 'http://res.cloudinary.com/testhero2/image/upload/v1486613586/14_lrageu.png',
};

export const defaultSubjectList = [ 'toefl', 'toeic', 'ielts', 'cu-tep', 'tu-get', 'sat', 'gmat', 'o-net', 'gat', 'pat' ];

export function hiddenHeader() {
	const viewportWidth = returnViewportWidth();
	if (viewportWidth < 768) {
		window.scroll(0, 56);
		document.getElementsByTagName('HEADER')[ 0 ].style.display = 'none';
	}
}

export function showHeader() {
	const viewportWidth = returnViewportWidth();
	if (viewportWidth < 768) {
		document.getElementsByTagName('HEADER')[ 0 ].style.display = 'block';
	}
}

export function hiddenGlobalHeader() {
	document.getElementsByTagName('HEADER')[ 0 ].style.display = 'none';
}

export function showGlobalHeader() {
	document.getElementsByTagName('HEADER')[ 0 ].style.display = 'block';
}

export function blobToFile(theBlob, fileName, fileType) {
	//A Blob() is almost a File() - it's just missing the two properties below which we will add
	let file = new File([ theBlob ], fileName, { type: fileType, lastModified: Date.now() })

	//theBlob.lastModifiedDate = new Date();
	//theBlob.name = fileName;
	return file;
}

export const svgPath = {
	l: "M43.6,33.2h9.2V35H41.6V15.2h2V33.2z",
	o: "M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2 c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2 c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3 C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9 c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3 c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7 c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z",
	a: "M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z",
	d: "M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3 c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4 c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6 c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z",
	i: "M121.2,35h-2V15.2h2V35z",
	n: "M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z",
	g: "M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9 c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9 s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5 c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2 c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z"
}