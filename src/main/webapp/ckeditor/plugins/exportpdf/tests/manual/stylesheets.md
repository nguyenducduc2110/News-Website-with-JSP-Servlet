@bender-tags: exportpdf, feature, 31
@bender-ui: collapsed
@bender-include: ../_helpers/tools.js
@bender-ckeditor-plugins: toolbar, basicstyles, notification

**Note:** This test uses <a href="https:

1. Use `Export to PDF` button in the first editor.
1. Open generated file.

  **Expected:**

  Text from editor was converted to a green badge.

  **Unexpected:**

  Content is the same as in the editor.

1. Repeat the same steps for the second and third editor.
