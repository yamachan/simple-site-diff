const XLSX = require('xlsx');

let wb = XLSX.readFile(process.argv[2]);
let ws = wb.Sheets[wb.SheetNames[0]];

let col_opt = (process.argv.length > 3 ? process.argv[3] : '').match(/^([A-Z]+)$/);
let col = col_opt ? col_opt[1] : 'A';
let row_opt = process.argv[process.argv.length - 1].match(/^-([\d]+)$/);
let row = row_opt ? Number(row_opt[1]) : 1;

function simple_site_diff_fix_url(_url) {
	let url = (_url||'');
	return url.startsWith('//') ? 'https:' + url : url;
}

let list = [];
while(ws[col + row] && !!ws[col + row].v) {
	list.push({url:simple_site_diff_fix_url(ws[col + row].v)});
	row++;
}
list = list.sort((a,b) => a.url == b.url ? 0 : a.url > b.url ? 1 : -1);

console.log('var simple_site_diff_data = ' + JSON.stringify(list) + ';');
