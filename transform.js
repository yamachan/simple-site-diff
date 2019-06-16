function simple_site_diff_transform(_url) {
	let url = (_url||'');
	return url.replace('www.example.com/', 'wwwtest.example.com/');
}
