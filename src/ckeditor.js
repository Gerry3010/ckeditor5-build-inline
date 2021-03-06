/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class InlineEditor extends InlineEditorBase {
}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
    Essentials,
    UploadAdapter,
    Autoformat,
    Alignment,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    BlockQuote,
    CKFinder,
    EasyImage,
    Heading,
    Highlight,
    FontFamily,
    FontSize,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar
];

// TODO: Create a plugin that supports image and file uploading and embedding

// Editor configuration.
InlineEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'fontFamily',
            'fontSize',
            'alignment',
            '|',
            'bold',
            'italic',
            'underline',
            'subscript',
            'superscript',
            'code',
            '|',
            'highlight',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'insertTable',
            'imageUpload',
            'mediaEmbed',
            '|',
            'undo',
            'redo'
        ]
    },
    alignment: {
        options: [ 'left', 'center', 'right', 'justify']
    },
    ckfinder: {
        openerMethod: 'modal'
    },
    fontFamily: {
        options: [
            'default',
            'Roboto, Arial, sans-serif',
            'Roboto Mono, Courier, monospace',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif'
        ]
    },
    image: {
        styles: ['full', 'alignLeft', 'alignCenter', 'alignRight'],
        toolbar: [
            'imageTextAlternative',
            '|',
            'imageStyle:full',
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight'
        ],
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'de'
};
