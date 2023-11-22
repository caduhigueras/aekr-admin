import {useEffect, useState} from "react";
import { PageTypeInterface } from "@/interfaces";
import { getAllPageTypes } from "@/app/api/page/type";
import shortid from "shortid";
import SelectedTypeBox from "@/components/page/types/selectedTypeBox";
export default function SelectedRepeaterOptions({ type }: { type: PageTypeInterface }) {
    let initialOptionsAvailable = Array<PageTypeInterface>;
    const [optionsAvailable, setOptionsAvailable] = useState(initialOptionsAvailable)
    const [newRepeaterField, setNewRepeaterField] = useState('text')

    useEffect(() => {
        type.options = optionsAvailable
    }, [optionsAvailable]);

    const addFieldToRepeater = () => {
        const id = shortid.generate()
        const option: PageTypeInterface = {
            // @ts-ignore
            type: newRepeaterField,
            id: Math.ceil(Math.random() * 10000000), //todo replace by unique numeric id
            key: id,
            name: `new_field_(${newRepeaterField})`,
            label: `New Field (${newRepeaterField})`,
            color: '',
            instructions: '',
            optionsAvailable: '',
            settings: {},
            options: []
        }
        setOptionsAvailable([...optionsAvailable, option])
    }

    return (
        <div>
            <div className='js-aekr-type-options'>
                <h4 className='mb-3 font-bold mt-10'>Options</h4>
                <div>
                    {
                        optionsAvailable.map( option => {
                            return (
                                <div key={shortid.generate()}>
                                   <SelectedTypeBox key={shortid.generate()} currPageType={option} />
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <h4 className='mt-6 mb-3'>Add Fields to Repeater</h4>
                <div className='flex flex-row space-x-1 justify-between'>
                    <select className='block w-full p-2 mb-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                            name="" id=""
                            onChange={(e) => {
                                setNewRepeaterField(e.target.value)
                            }}
                    >
                        {
                            getAllPageTypes().map( type => {
                                return (
                                    <option key={shortid.generate()} value={type.type}>{ type.label }</option>
                                )
                            })
                        }
                    </select>
                    <button className='bt-primary'
                        onClick={ () => { addFieldToRepeater() } }>Add</button>
                </div>

            </div>
        </div>
    )
}