import  { type PageTypeInterface, allowedPageTypes } from "@/interfaces";

export const mapPageTypes = (type: string) => {
    switch (type) {
        case 'text':
            return allowedPageTypes.text
        case 'textarea':
             return allowedPageTypes.textarea
        case 'wysiwyg':
             return allowedPageTypes.wysiwyg
        case 'select':
             return allowedPageTypes.select
        case 'multiselect':
             return allowedPageTypes.multiselect
        case 'checkbox':
             return allowedPageTypes.checkbox
        case 'radio':
             return allowedPageTypes.radio
        case 'repeater':
             return allowedPageTypes.repeater
        case 'image':
             return allowedPageTypes.image
        case 'fileUploader':
             return allowedPageTypes.fileUploader
        default:
            //todo throw err
    }
}
export const getTypeById = (pageId: number): PageTypeInterface[] => {
    return [
        {
            id: 111,
            type: allowedPageTypes.text,
            name: 'page_title',
            label: 'Page Title',
            instructions: 'This is a text input',
            settings: {
                required: false,
                additionalClasses: ''
            },
            color:'blue',
        },
        {
            id: 112,
            type: allowedPageTypes.textarea,
            name: 'meta_description',
            label: 'Meta Description',
            instructions: 'This is a textarea input',
            settings: {
                required: false,
                additionalClasses: ''
            },
            color:'lightblue',
        },
    ]
}

export const getAllPageTypes = () => {
    const pageTypes: PageTypeInterface[] = [
        {
            id: 1,
            type: allowedPageTypes.text,
            name: 'text',
            label: 'Text Input',
            instructions: 'This is a text input',
            settings: [],
            color: 'blue'
        },
        {
            id: 2,
            type: allowedPageTypes.textarea,
            name: 'textarea',
            label: 'Text Area',
            instructions: 'This is a textarea input',
            settings: [],
            color: 'lightblue'
        },
        {
            id: 3,
            type: allowedPageTypes.wysiwyg,
            name: 'wysiwyg',
            label: 'Wysiwyg (Text Editor) Input',
            instructions: 'This is a wysiwyg. Use this for formatting texts, images, html, etc...',
            settings: [],
            color: 'purple-500'
        },
        {
            id: 4,
            type: allowedPageTypes.select,
            name: 'select',
            label: 'Select',
            instructions: 'This is a select input',
            settings: [],//todo add options repeater
            color: 'yellow-500'
        },
        {
            id: 5,
            type: allowedPageTypes.multiselect,
            name: 'multiselect',
            label: 'Multiselect',
            instructions: 'This is a multiselect input',
            settings: [],//todo add options repeater
            color: 'yellow-300'
        },
        {
            id: 6,
            type: allowedPageTypes.checkbox,
            name: 'checkbox',
            label: 'Checkbox',
            instructions: 'This is a text input',
            settings: [],//todo add options repeater
            color: 'red-600'
        },
        {
            id: 7,
            type: allowedPageTypes.radio,
            name: 'radio',
            label: 'Radio',
            instructions: 'This is a radio input',
            settings: [],//todo add options repeater
            color: 'red-500'
        },
        {
            id: 8,
            type: allowedPageTypes.repeater,
            name: 'repeater',
            label: 'Repeater',
            instructions: 'The repeater can be used to create repetition patterns. Example: 6 service boxes component in which all of them contain the same structure',
            settings: [],
            color: 'purple-950'
        },
        {
            id: 9,
            type: allowedPageTypes.image,
            name: 'image',
            label: 'Image Uploader',
            instructions: 'Use to upload images',
            settings: [],//todo add settings for maxsize, file type, etc
            color: 'green-700'
        },
        {
            id: 10,
            type: allowedPageTypes.fileUploader,
            name: 'file_uploader',
            label: 'File Uploader',
            instructions: 'Use to upload images',
            settings: [],//todo add settings for maxsize, file type, etc
            color: 'green-500'
        },

    ]
    return pageTypes;
}