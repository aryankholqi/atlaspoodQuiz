import { Divider } from "antd";
import RulerIcon from "../../../assets/icons/Ruler";

export default function SizePicker({ value, onChange, sizes }: { value: null | number | string, onChange: (value: null | number) => void, sizes: { id: number, width: number, height: number, isAvailable: boolean }[] }) {

    const selectSizeHandler = (size: { id: number, width: number, height: number, isAvailable: boolean }) => {
        if (value === size.id) {
            return onChange(null)
        }

        if (size.isAvailable) {
            return onChange(size.id)
        }
    }
    return (
        <div className="space-y-2">
            <p className="font-novaMedium">Size:</p>
            <div className="flex items-center flex-wrap gap-2">
                {sizes.map((size, index: number) => (
                    <div key={index} className={`cursor-pointer px-4 py-2 ${value === size.id ? "border-black border-2" : "border-gray-400 border-[1px]"} relative`} onClick={() => selectSizeHandler(size)}>
                        <p>{size.width}CM x {size.height}CM</p>
                        {!size.isAvailable && <Divider className="absolute bg-gray-400 -top-1 left-0 rotate-[13deg]" />}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <RulerIcon />
                <p className="underline font-novaMedium text-lg">Measuring Guide</p>
            </div>
        </div>
    )
}
