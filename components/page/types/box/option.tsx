import {useEffect, useState} from "react";

export default function Option({ option }: { option:any }) {
    const [labelValue, setLabelValue] = useState(option.labelValue)
    const [nameValue, setNameValue] = useState(option.nameValue)

    useEffect(() => {
        option.labelValue = labelValue
        option.nameValue = nameValue
    }, [labelValue, nameValue]);

    const updateOptionLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabelValue(e.target.value)
        setNameValue(e.target.value.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase())
    };

    const updateOptionName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase())
    };

    return (
        <div>
            <div key={option.id} className='mb-4 input-wrapper flex flex-row justify-between'>
                {/*//todo move to different component options*/}
                <input
                    id={`label-${option.id}`}
                    className='w-full border border-solid p-4 focus:border-secondary'
                    name={`option-label-input-${option.id}`}
                    data-optiontype='labelInput'
                    data-optionid={option.id}
                    type={ option.type }
                    value={ labelValue }
                    onChange={ (e) => { updateOptionLabel(e) }}
                    placeholder={ option.placeHolderLabel }
                />{/*todo add auto fill for name when filling label*/}
                <input
                    id={`name-${option.id}`}
                    className='w-full border border-solid p-4 focus:border-secondary'
                    name="name"
                    data-optiontype='nameInput'
                    data-optionid={option.id}
                    type="text"
                    value={ nameValue }
                    onChange={(e) => { updateOptionName(e) }}
                    placeholder='Label'
                />
            </div>
        </div>
    )
}