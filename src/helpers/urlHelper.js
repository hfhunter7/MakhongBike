export const apiUrl = {
	// development: "http://localhost:9999/v1",
	// production: "http://localhost:9999/v1",
	development: "https://apitestherostaging.testhero.in.th/trainingcenterbackend-1.0.0/v1",
	production: "https://apitestherostaging.testhero.in.th/trainingcenterbackend-1.0.0/v1",
};

export function extraUrl(params) {
	let extra_url = '?';
	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			extra_url = extra_url + key + "=" + params[ key ] + "&";
		}
	}

	if (extra_url.length <= 1) {
		extra_url = "";
	} else {
		extra_url = extra_url.slice(0, -1);
	}

	return extra_url;

}