"use client"
import shortid from "shortid"
import { PageTypeInterface } from "@/interfaces";
import {useState} from "react";

export default function SelectedTypeOptions({ type }: { type: PageTypeInterface }) {

    const generatedId = shortid.generate();
    let i = 0;
    const id = `${generatedId}-option-${i}`

    let initialOptionsAvailable = [
        {
            labelInput: {
                key: `label-${id}`,
                id: `label-${id}`,
                name: `label-${id}`,
                type: 'text',
                onChange: (e)=> {
                    console.log(e);
                },
                placeHolder: 'Label'
            },
            nameInput: {
                key: `name-${id}`,
                id: `name-${id}`,
                name: `name-${id}`,
                type: 'text',
                onChange: (e)=> {
                    console.log(e);
                },
                placeHolder: 'Label'
            },
        }
    ]

    const [optionsAvailable, setOptionsAvailable] = useState(initialOptionsAvailable)


    const renderNewOption = () => {
        const dynamicGeneratedId = shortid.generate();
        i++;
        const id = `${dynamicGeneratedId}-option-${i}`
        const newOption = {
            labelInput: {
                key: `label-${dynamicGeneratedId}`, id: `label-${dynamicGeneratedId}`, name: 'label', type: 'text', onChange: (e)=> { console.log(e); }, placeHolder: 'Label'
            },
            nameInput: {
                key: `name-${dynamicGeneratedId}`, id: `name-${dynamicGeneratedId}`, name: 'label', type: 'text', onChange: (e)=> { console.log(e); }, placeHolder: 'Label'
            },
        }
        setOptionsAvailable([...optionsAvailable, newOption])
    }

    return (
        <div className='js-aekr-type-options'>
            <h4>Options</h4>
            {
                optionsAvailable.map( option => {
                    return (
                        <div className='mb-4 input-wrapper flex flex-row justify-between'>
                            <input
                                key={ option.labelInput.key }
                                id={ option.labelInput.id }
                                className='w-full border border-solid p-4 focus:border-secondary'
                                name={ option.labelInput.name }
                                type={ option.labelInput.type }
                                onChange={ option.labelInput.onChange }
                                placeholder={ option.labelInput.placeHolder }
                            />{/*todo add auto fill for name when filling label*/}
                            <input
                                key='name-new-option-1'
                                id={`name-option-1`}
                                className='w-full border border-solid p-4 focus:border-secondary'
                                name="name"
                                type="text"
                                onChange={() => {
                                }} placeholder='Label'
                            />
                        </div>
                    )
                })
            }
            <button
                onClick={() => { renderNewOption() }}
                className={`bt-primary right-0.5`}>Add Option</button>
        </div>
    )
}