# simple-site-diff

This is a simple tool to check the difference of pages in 2 web site. These 2 site must have a same file tree.

## Usecase

For example, this tool can work well in the following situations;

* The site will move the new server, and you want to check the integrity of them per page.
* The site will use the new design template, so you want to check each page appearance among the production server and the test server which uses the new design template.

## What you need

You need to prepare one of the following;

* A text file which list the URLs of target web pages
* A CSV file which has a column for the URLs of target web pages
* A excel file which has a column for the URLs of target web pages

## How to use

### 1. Setup the tool

1. You need to download this repo - clone or download ZIP.
2. You need to install Node.js environment (ver8 or later) on your environment.
3. You need to install necessary packages in this repo's directory;

```
npm install
```

### 2. Create a data file

The `node-convert.js` file is a simple Node.js program to convert your text/CSV/excel file to a data file, `url-list.js`.

You need to set the column number for CSV/excel files in the excel rule - the 1st column is `A`, the 2nd column is `B`, and the 3rd column is `C`,,,

```
node node-convert source-file.txt > url-list.js
node node-convert source-file.csv B > url-list.js
node node-convert source-file.xlsx B > url-list.js
```

If you want skip the 1st line/row (which contain titles), use `-2` option at the last option.

```
node node-convert source-file.csv B -2 > url-list.js
node node-convert source-file.xlsx B -2 > url-list.js
```

**Hint:** The file format of `url-list.js` is very simple, so you can create it by your hand or your tool.

### 3. Update the transform function

The file `transform.js` contains the definition of function like follows.

```js
function simple_site_diff_transform(_url) {
	return (_url||'').replace('www.example.com/', 'wwwtest.example.com/');
}
```

This function gets a URL of the production page (which will be shown in the left window), and returns a URL of the test page (which will be shown in the right window).
You need to update this function to fit your environment.

### 4. Open the check page

Open the `index.html` file by your web browser.

On the top, you can see the URL list which you want to check. When you click the URL, the left below window shows the original web page (of the URL list), then the right below windows shows the test web page which you need to check.

You can use checkbox and text memo on the URL list. But it's a temporary memo, and will cleared with refresh of this web page.

### 5. Save the checkbox and text memo (Optional)

The tool's checkbox and text memo are temporary ones, and will be lost after closing.

If you want to save checkbox and text memo, please push 'Re-create data for url-list.js file' button at the end of the URL list. Then, you will see the data text in the textbox below. This data contains not only the original URL list, but also checkbox status and text memos. So you can copy this text, then paste it into your text editor, then save it as a new 'url-list.js' file.
