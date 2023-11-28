export type SelectPropsType = {
    name: string,
    options: selectOptionType[],
    id: string,
    css: null|string,
    placeholder: string
}

export type selectOptionType = {
    value: string,
    label: string,
    isSelected: boolean
}