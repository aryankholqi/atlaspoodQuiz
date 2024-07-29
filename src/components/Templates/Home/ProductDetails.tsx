import { Button, Divider } from "antd";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import TypePicker from "./TypePicker";
import QuantityPicker from "./QuantityPicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { addToCartProps } from "../../../interfaces/addToCart.interface";
import { getProductInfo } from "../../../mock/productsInfo";
import ProductGallery from "./ProductGallery";

export default function ProductDetails() {
    const productInfo = getProductInfo();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<addToCartProps>({
        defaultValues: {
            quantity: 1,
        },
    });

    const addToCartHandler: SubmitHandler<addToCartProps> = (data) => {
        console.log(data);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(addToCartHandler)}>
            <h1 className="text-3xl font-novaMedium uppercase">
                {productInfo.title}
            </h1>
            <p>{productInfo.price.toLocaleString()} Tomans</p>
            <Divider className="bg-black" />
            <div className="lg:hidden">
                <ProductGallery gallery={getProductInfo().gallery} />
            </div>
            <Controller
                rules={{
                    required: "Please Select a color",
                }}
                control={control}
                name="color"
                render={({ field: { onChange, value } }) => (
                    <ColorPicker
                        value={value}
                        onChange={onChange}
                        colors={productInfo.colors}
                    />
                )}
            />
            <span className="text-xs text-red-500 font-novaRegular">
                {Boolean(errors.color) && errors.color?.message}
            </span>
            <Controller
                rules={{
                    required: "Please Select a size",
                }}
                control={control}
                name="size"
                render={({ field: { onChange, value } }) => (
                    <SizePicker
                        value={value}
                        onChange={onChange}
                        sizes={productInfo.sizes}
                    />
                )}
            />
            <span className="text-xs text-red-500 font-novaRegular">
                {Boolean(errors.size) && errors.size?.message}
            </span>
            <Controller
                rules={{
                    required: "Please select type of product",
                }}
                control={control}
                name="type"
                render={({ field: { value, onChange } }) => (
                    <TypePicker
                        value={value}
                        onChange={onChange}
                        types={productInfo.types}
                    />
                )}
            />
            <span className="text-xs text-red-500 font-novaRegular">
                {Boolean(errors.type) && errors.type?.message}
            </span>
            <Controller
                control={control}
                name="quantity"
                render={({ field: { onChange, value } }) => (
                    <QuantityPicker
                        value={value}
                        onChange={onChange}
                        quantity={productInfo.quantity}
                    />
                )}
            />
            <Button
                className="uppercase bg-gray-400 w-full py-6 text-white"
                htmlType="submit"
                type="text"
            >
                Add to Bag
            </Button>
            <Button className="uppercase w-full py-6" type="text">
                Save to wishlist
            </Button>
        </form>
    );
}