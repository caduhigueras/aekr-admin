import { PageTypeInterface } from "@/interfaces";

export default function AllAllowedBox({ type }: { type: PageTypeInterface }) {

    const drag = (event: React.DragEvent<HTMLLIElement>) => {
        // console.log(event.target.dataset.pagetype);
        // @ts-ignore
        event.dataTransfer.setData('pagetype', event.target.dataset.pagetype)
        // @ts-ignore
        event.dataTransfer.setData('id', event.target.dataset.id)
        // @ts-ignore
        event.dataTransfer.setData('name', event.target.dataset.name)
        // @ts-ignore
        event.dataTransfer.setData('label', event.target.dataset.label)
        // @ts-ignore
        event.dataTransfer.setData('instructions', event.target.dataset.instructions)
        // @ts-ignore
        event.dataTransfer.setData('settings', event.target.dataset.settings)
        // @ts-ignore
        event.dataTransfer.setData('color', event.target.dataset.color)
    }


    return (
        <li
            className={`bg-light-gray text-dark-gray cursor-pointer p-4 bb-${ type.color } border-l-4 border-l-solid mb-2`}
            draggable={ true }
            onDragStart={ event => {
                drag(event)
            }}
            data-pagetype={ type.type }
            data-id={type.id}
            data-name={type.name}
            data-label={type.label}
            data-color={type.color}
            data-instructions={type.instructions}
            data-settings={JSON.stringify(type.settings)}
        >
            { type.label }
        </li>
    )
}