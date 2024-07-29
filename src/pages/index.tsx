import ProductDetails from "../components/Templates/Home/ProductDetails";
import ProductGallery from "../components/Templates/Home/ProductGallery";

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className=" col-span-7">
                <ProductGallery />
            </div>
            <div className="col-span-5">
                <ProductDetails />
            </div>
        </div>
    )
}
