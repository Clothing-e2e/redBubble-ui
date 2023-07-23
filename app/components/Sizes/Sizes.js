export default function Sizes({ data }) {
    return (
        <>
            { data.map((item) => {
                const { quantity } = item;
                return (
                    <div 
                        className={`rounded-full w-[35px] h-[35px] flex justify-center items-center ${quantity !== 0 ? 'cursor-pointer' : ''}`}
                        style={{ border: '0.5px solid black'}}
                    >
                        {item.name}
                    </div>
                )
            })}
        </>
    )
}