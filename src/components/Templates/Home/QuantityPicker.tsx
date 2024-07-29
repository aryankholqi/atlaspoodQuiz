import MinusIcon from "../../../assets/icons/Minus";
import PlusIcon from "../../../assets/icons/Plus";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuantityPicker({ value, onChange, quantity }: any) {
    const minusQuantity = () => {
        if (value > 1) {
            onChange(value - 1)
        }
    }
    const plusQuantity = () => {
        if (value < quantity) {
            onChange(value + 1)
        }
    }
    return (
        <div className="space-y-2 font-novaMedium">
            <p>QTY:</p>
            <div className="flex items-center gap-6 border-[1px] border-black w-max py-1 px-2">
                <button onClick={minusQuantity} type="button"><MinusIcon /></button>
                <p>{value}</p>
                <button onClick={plusQuantity} type="button"><PlusIcon /></button>
            </div>
            <small>In Stock: {quantity}</small>
        </div>
    )
}
