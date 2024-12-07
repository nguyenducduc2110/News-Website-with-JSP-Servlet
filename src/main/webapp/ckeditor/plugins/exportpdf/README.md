# CKEditor 4 Export to PDF Plugin

The **Export to PDF** CKEditor 4 plugin allows you to easily print the WYSIWYG editor content to a PDF file. When enabled, this feature sends the content of your editor together with the styles that are used to display it to the CKEditor Cloud Services HTML to PDF converter service. The service then generates a PDF document that can be downloaded by the user.

Thanks to this plugin, it takes exactly one button click to get a PDF file with content formatted in the same way as the one visible in CKEditor 4.

CKEditor 4 **Export to PDF** also allows various customizations like changing the page size and margin, setting additional styling, adding custom headers and footers and pre-processing content. This gives great flexibility and control over the PDF output and allows to keep all the PDF documents consistent when it comes to styling.

This is a premium feature. Please [contact us](https:

If this feature is used without authorization, the resulting documents will be watermarked.

![](https:

## Getting Started

### Using with official CKEditor 4 presets

Starting with CKEditor 4 version `4.15.0`, **Export to PDF** plugin is included in `standard-all`, `full` and `full-all` official presets. The `full` and `full-all` presets have the plugin active by default while for `standard-all` it needs to be enabled with the [`config.extraPlugins`](https:

```js
CKEDITOR.replace( 'editor', {
    extraPlugins: 'exportpdf'
} );
```

### Installation from npm

To instal the plugin via npm, simply run:

```bash
npm i ckeditor4-plugin-exportpdf
```

Then add the plugin to your CKEditor 4 instance with the [`addExternal()` method](https:

```js
CKEDITOR.plugins.addExternal( 'exportpdf', './node_modules/ckeditor4-plugin-exportpdf/' );
```

If you prefer not to link to the `node_modules` folder directly, you may simply copy the entire `./node_modules/ckeditor4-plugin-exportpdf/` directory as `ckeditor/plugins/exportpdf/` and add it with the [`config.extraPlugins`](https:

```js
CKEDITOR.replace( 'editor', {
    extraPlugins: 'exportpdf'
} );
```

### Other Installation Methods

You can also use the [CKEditor 4 Add-ons repository](https:

* [Custom build with online builder](https:
* [Manual download](https:

Refer to [Export to PDF installation documentation](https:

### Setting up a license key

If you have a commercial license for **Export to PDF** plugin, [exportPdf_tokenUrl](https:

```js
CKEDITOR.replace( 'editor', {
	exportPdf_tokenUrl: 'https:
} );
```

This value is unique for each customer and can be found in the [CKEditor Ecosystem dashboard](https:

This is all. If you are having trouble in setting up Export to PDF plugin, please [contact us](https:

## Features

The CKEditor 4 Export to PDF plugin is really simple to use and works out-of-the-box. It does not require any additional configuration and due to its flexible nature, it covers a lot of cases internally while also providing an easy way to [customize output PDF files](https:

The most important features are:

*   Exporting HTML content from CKEditor 4 WYSIWYG editor to PDF with a single click.
*   [Setting a custom name](https:
*   [Handling relative image paths](https:
*   [Changing the appearance of the PDF document](https:
*   [Pre-processing HTML content](https:

## Browser and CKEditor 4 Support

The CKEditor 4 Export to PDF plugin works in all the browsers [supported by CKEditor 4](https:

## Demo

See the working ["Exporting editor content to PDF"](https:

## License

**CKEditor 4 Export to PDF plugin** (https:
Copyright (c) 2003-2022, [CKSource](http:

CKEditor 4 export to PDF plugin is licensed under a commercial license and is protected by copyright law.
For more details about available licensing options please contact us at sales@cksource.com.

### Trademarks

**CKEditor** is a trademark of [CKSource](http:
