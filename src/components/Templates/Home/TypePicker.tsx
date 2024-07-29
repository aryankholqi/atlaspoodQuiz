export default function TypePicker({ value, onChange, types }: { value: null | string, onChange: (value: null | string) => void, types: { title: string }[] }) {
    return (
        <div className="space-y-2">
            <p className="font-novaMedium">Lining</p>
            <div className="flex items-center gap-2 flex-wrap font-novaMedium">
                {types.map((type, index: number) => (
                    <div key={index} className={`cursor-pointer px-4 py-2 border-[1px] ${value === type.title ? "border-black" : "border-gray-300"} text-center basis-[30%]`} onClick={() => onChange(type.title)}>
                        <p>{type.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}