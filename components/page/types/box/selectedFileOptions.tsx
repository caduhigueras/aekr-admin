export default function SelectedFileOptions () {
    return (
        <div>
            <div className='js-aekr-type-options'>
                <h4>Options</h4>
                <div className='mb-4 input-wrapper flex flex-row justify-between'>
                    <input
                        id='types_allowed'
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name='types_allowed'
                        type='text'
                        placeholder='Ex: jpg,png,webp,csv,pdf'
                    />{/*todo add auto fill for name when filling label*/}
                    <input
                        id='max_size_allowed'
                        className='w-full border border-solid p-4 focus:border-secondary'
                        name="max_size_allowed"
                        type="text"
                        placeholder='(In KB) Ex: 500'
                    />
                </div>
            </div>
        </div>
    )
}