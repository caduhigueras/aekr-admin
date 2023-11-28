import { SelectPropsType } from "@/interfaces";

export function Select({id, css, options, placeholder, name}: SelectPropsType) {
    return (
        <select name={name} placeholder={placeholder} id={id}
            className={`w-full ${css}`}>
            {
                options.map( option => {
                    return (
                        <option value={option.value}
                                selected={option.isSelected}>
                            {option.label}
                        </option>
                    )
                })
            }
        </select>
    )
}