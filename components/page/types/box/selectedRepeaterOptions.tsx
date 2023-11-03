import { useState } from "react";
import { PageTypeInterface } from "@/interfaces";
import { getAllPageTypes } from "@/app/api/page/type";
import shortid from "shortid";
import SelectedTypeBox from "@/components/page/types/selectedTypeBox";
export default function SelectedRepeaterOptions({ type }: { type: PageTypeInterface }) {
    let initialOptionsAvailable = Array<PageTypeInterface>;
    const [optionsAvailable, setOptionsAvailable] = useState(initialOptionsAvailable)
    const [newRepeaterField, setNewRepeaterField] = useState('text')

    const id = shortid.generate()
    const addFieldToRepeater = () => {
        const option: PageTypeInterface = {
            type: newRepeaterField,
            id: id,
            key: id,
            name: `new_field_(${newRepeaterField})`,
            label: `New Field (${newRepeaterField})`,
            color: '',
            instructions: '',
            optionsAvailable: '',
            settings: {}
        }
        setOptionsAvailable([...optionsAvailable, option])
    }

    return (
        <div>
            <div className='js-aekr-type-options'>
                <h4>Options</h4>
                <div>
                    {
                        optionsAvailable.map( option => {
                            return (
                                <div>
                                   <SelectedTypeBox key={id} currPageType={option} />
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                <h4>Add Fields to Repeater</h4>
                <div className='flex flex-row space-x-1 justify-between'>
                    <select name="" id=""
                            onChange={(e) => {
                                setNewRepeaterField(e.target.value)
                            }}
                    >
                        {
                            getAllPageTypes().map( type => {
                                return (
                                    <option value={type.type}>{ type.label }</option>
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