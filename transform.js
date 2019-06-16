function simple_site_diff_transform(_url) {
	let url = (_url||'');
	if (url.indexOf('developer.ibm.com/cn') >= 0) { // Sample for IBM Developer China site
		return url.replace('developer.ibm.com/cn', 'ibmdev1.rtp.raleigh.ibm.com/zh');
	} else if (url.indexOf('developer.ibm.com/') >= 0) { // Sample for some IBM Developer sites
		return url.replace('developer.ibm.com/', 'ibmdev1.rtp.raleigh.ibm.com/');
	} else {
		return url.replace('www.example.com/', 'wwwtest.example.com/');
	}
}
