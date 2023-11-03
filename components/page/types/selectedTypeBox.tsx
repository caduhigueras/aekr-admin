import { PageTypeInterface, allowedPageTypes } from "@/interfaces";
import { useState } from "react";
import SelectedTypeOptions from "@/components/page/types/box/selectedTypeOptions";
import SelectedFileOptions from "@/components/page/types/box/selectedFileOptions";
import SelectedRepeaterOptions from "@/components/page/types/box/selectedRepeaterOptions";

export default function SelectedTypeBox({ currPageType }:{ currPageType:PageTypeInterface }) {
    const [currentName, setCurrentName] = useState(currPageType.name)
    const [currentLabel, setCurrentLabel] = useState(currPageType.label)

    const typesWithOptions = [
        allowedPageTypes.select,
        allowedPageTypes.multiselect,
        allowedPageTypes.radio,
        allowedPageTypes.checkbox
    ];

    const fileTypes = [
        allowedPageTypes.fileUploader,
        allowedPageTypes.image
    ]

    const [isBoxActive, setIsBoxActive ] = useState(false)

    const toggleIsBoxOpen = () => {
        setIsBoxActive(!isBoxActive)
    };

    const updateTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const str = ev.target.value;
        let formattedName = str.replace(/[^a-zA-Z0-9_]/g, '_');
        if (formattedName) {
            formattedName = formattedName.toLowerCase()
        }
        currPageType.label = str
        setCurrentLabel(str)
        currPageType.name = formattedName
        setCurrentName(formattedName)
    };

    return (
        <li
            className={`w-full p-4 bg-white mb-4 shadow-md border-l-4 border-solid bb-${currPageType.color}`}>
            <span
                className='title-small cursor-pointer w-full block'
                onClick={() => { toggleIsBoxOpen()} }
            >
                { currPageType.label }
            </span>
            <div className={`w-full transition-all duration-200 ease-in-out
                ${ isBoxActive ? 'h-auto opacity-100 mt-10' : 'h-0 overflow-hidden opacity-0'}`}>
                <hr className='mb-10 w-full'/>
                <div className='mb-4 input-wrapper'>
                    <input
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="label"
                        type="text"
                        value={ currentLabel }
                        onChange={(ev) => { updateTitle(ev) }} placeholder='Label'
                    />
                </div>
                <div className='mb-4 input-wrapper'>
                    <input
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="name"
                        type="text"
                        value={ currentName }
                        onChange={() => {}}
                        placeholder='Name'
                    />
                </div>
                <div className='mb-4 input-wrapper'>
                    <input className='cursor-pointer'
                           type="checkbox"
                           name={`is_required-${ currPageType.id }`}
                           id={`is_required-${ currPageType.id }`} />
                    <label className='cursor-pointer ml-2 text-dark-gray' htmlFor={`is_required-${ currPageType.id }`}>Required</label>
                </div>
                {
                    typesWithOptions.includes(currPageType.type) ?
                        <SelectedTypeOptions type={ currPageType } />
                        : ''
                }
                {
                    fileTypes.includes(currPageType.type) ?
                        <SelectedFileOptions type={ currPageType } />
                        : ''
                }
                {
                    currPageType.type === allowedPageTypes.repeater ?
                        <SelectedRepeaterOptions type={ currPageType } />
                        : ''
                }
            </div>
        </li>
    )
}