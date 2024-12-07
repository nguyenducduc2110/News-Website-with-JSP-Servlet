/**
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );



CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );

		
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=https:
			);
		}

		
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace( 'editor', {
				on: {
					contentPreview: function( evt ) {
						evt.data.dataValue = '<div style="padding: 1.5em;border: 3px #f00 solid">' +
								'<h1>Content Preview was blocked</h1>' +
								'<p>To ensure the highest security, the content preview in samples was blocked.</p>' +
								'<p>Please refer to our ' +
									'<a href="https:
									'best practices on security</a> to learn more how to properly configure and secure the content preview.</p>' +
							'</div>';
					}
				}
			} );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor', {
				on: {
					contentPreview: function( evt ) {
						evt.data.dataValue = '<div style="padding: 1.5em;border: 3px #f00 solid">' +
								'<h1>Content Preview was blocked</h1>' +
								'<p>To ensure the highest security, the content preview in samples was blocked.</p>' +
								'<p>Please refer to our ' +
									'<a href="https:
									'best practices on security</a> to learn more how to properly configure and secure the content preview.</p>' +
							'</div>';
					}
				}
			} );

			
			
		}
	};

	function isWysiwygareaAvailable() {
		
		
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();

