import ProductGallery from "../components/Templates/Home/ProductGallery";

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
                <ProductGallery />
            </div>
        </div>
    )
}
