
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ColorPicker({ value, onChange, colors }: any) {
    return (
        <div className='space-y-2'>
            <p className="font-novaMedium">Color: {value}</p>
            <div className="flex items-center flex-wrap gap-2">
                {colors.map((color: { title: string, img: string }, index: number) => (
                    <img key={index} src={color.img} alt="" width={50} className={`${value === color.title ? "border-[1px] p-[2px]" : ""}`} onClick={() => onChange(color.title)} />
                ))}
            </div>
        </div>
    )
}
