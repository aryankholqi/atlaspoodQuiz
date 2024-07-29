import ProductDetails from "../components/Templates/Home/ProductDetails";
import ProductGallery from "../components/Templates/Home/ProductGallery";
import { getProductInfo } from "../mock/productsInfo";

export default function Home() {
    return (
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 hidden lg:inline-block">
                <ProductGallery gallery={getProductInfo().gallery} />
            </div>
            <div className="lg:col-span-5">
                <ProductDetails />
            </div>
        </div>
    );
}