import { PageTypeInterface, allowedPageTypes } from "@/interfaces";
import { useState } from "react";
import SelectedTypeOptions from "@/components/page/types/box/selectedTypeOptions";
import SelectedFileOptions from "@/components/page/types/box/selectedFileOptions";
import SelectedRepeaterOptions from "@/components/page/types/box/selectedRepeaterOptions";

export default function SelectedTypeBox({ currPageType }:{ currPageType:PageTypeInterface }) {
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

    return (
        <li key={currPageType.id}
            className={`w-full p-4 bg-white mb-4 shadow-md border-b-4 border-solid bb-${currPageType.color}`}>
            <span
                className='font-bold text-xl cursor-pointer w-full pb-4 mt-4 block'
                onClick={() => { toggleIsBoxOpen()} }
            >
                { currPageType.label }
            </span>
            <div className={`w-full transition-all duration-200 ease-in-out
                ${ isBoxActive ? 'h-auto opacity-100' : 'h-0 overflow-hidden opacity-0'}`}>
                <div className='mb-4 input-wrapper'>
                    <input
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="label"
                        type="text"
                        value={ currPageType.label }
                        onChange={() => {}} placeholder='Label'
                    />
                </div>
                <div className='mb-4 input-wrapper'>
                    <input
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="name"
                        type="text"
                        value={ currPageType.name }
                        onChange={() => {}} placeholder='Name'
                    />
                </div>
                <div className='mb-4 input-wrapper'>
                    <input type="checkbox"
                           name={`is_required-${ currPageType.id }`}
                           id={`is_required-${ currPageType.id }`} />
                    <label className='cursor-pointer' htmlFor={`is_required-${ currPageType.id }`}>Required</label>
                </div>
                {
                    typesWithOptions.includes(currPageType.type) ?
                        <SelectedTypeOptions type={ currPageType } />
                        : ''
                }
                {
                    fileTypes.includes(currPageType.type) ?
                        <SelectedFileOptions />
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