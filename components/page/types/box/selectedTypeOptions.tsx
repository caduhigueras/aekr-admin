"use client"
import shortid from "shortid"
import { PageTypeInterface } from "@/interfaces";
import { useEffect, useState } from "react";
import Option from "@/components/page/types/box/option";

export default function SelectedTypeOptions({ type }: { type: PageTypeInterface }) {

    const generatedId = shortid.generate();
    let i = 0;
    const id = `${generatedId}-option-${i}`

    let initialOptionsAvailable = [
        {
            id: shortid.generate(),
            labelValue: '',
            nameValue: '',
            type: 'text',
            placeHolderLabel: 'Label',
            placeHolderName: 'Name',
        }
    ]

    const [optionsAvailable, setOptionsAvailable] = useState(initialOptionsAvailable)

    useEffect(() => {
        type.options = optionsAvailable;
    }, [optionsAvailable]);

    const renderNewOption = () => {
        const newOption = {
            id: shortid.generate(),
            labelValue: '',
            nameValue: '',
            type: 'text',
            placeHolderLabel: 'Label',
            placeHolderName: 'Name',
        }
        setOptionsAvailable([...optionsAvailable, newOption])
    }

    return (
        <div className='js-aekr-type-options'>
            <h4 className='mb-3 font-bold mt-10'>Options</h4>
            {
                optionsAvailable.map( option => {
                    return (
                        <Option key={shortid.generate()} option={option} />
                    )
                })
            }
            <button
                onClick={() => { renderNewOption() }}
                className={`bt-primary right-0.5`}>Add Option</button>
        </div>
    )
}