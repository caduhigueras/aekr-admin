import { PageTypeInterface } from "@/interfaces";
import {useEffect, useState} from "react";

export default function SelectedFileOptions ({ type }: { type: PageTypeInterface}) {
    const initialOptions:Array<any> = type.options ? type.options : {
        // @ts-ignore
        typesAllowed: '',
        maxSize: ''
    }

    const [maxSize, setMaxSize] = useState('')
    const [typeAllowed, setTypeAllowed] = useState('')
    const [currentOptions, setCurrentOptions] = useState(initialOptions)

    useEffect(() => {
        type.options = currentOptions
    }, [currentOptions]);

    const updateTypesAllowed = (e: React.ChangeEvent<HTMLInputElement>) => {
        const typeAllowed = e.target.value
        setTypeAllowed(typeAllowed)
        //@ts-ignore
        currentOptions.typesAllowed = typeAllowed
        setCurrentOptions(currentOptions)
    };

    const updateMaxSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxSize = e.target.value
        setMaxSize(maxSize)
        //@ts-ignore
        currentOptions.maxSize = maxSize
        setCurrentOptions(currentOptions)
    };

    return (
        <div>
            <div className='js-aekr-type-options'>
                <h4 className='mb-3 font-bold mt-10'>Options</h4>
                <div className='mb-4 input-wrapper flex flex-row justify-between'>
                    <input
                        id='types_allowed'
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name='types_allowed'
                        type='text'
                        value={ typeAllowed }
                        onChange={ (e) => { updateTypesAllowed(e) }}
                        placeholder='Ex: jpg,png,webp,csv,pdf'
                    />
                    <input
                        id='max_size_allowed'
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="max_size_allowed"
                        type="text"
                        value={ maxSize }
                        onChange={ (e) => { updateMaxSize(e) }}
                        placeholder='(In KB) Ex: 500'
                    />
                </div>
            </div>
        </div>
    )
}