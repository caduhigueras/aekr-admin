export enum allowedPageTypes {
    text ='text',
    textarea ='textarea',
    wysiwyg ='wysiwyg',
    select ='select',
    multiselect ='multiselect',
    checkbox ='checkbox',
    radio ='radio',
    repeater ='repeater',
    image = 'image',
    fileUploader = 'fileUploader',
}
export interface PageTypeInterface {
    id: number,
    name: string,
    label: string,
    type: allowedPageTypes,
    instructions: string,
    settings: object, //todo own interface,
    color: string,
    options: Array<any>
}