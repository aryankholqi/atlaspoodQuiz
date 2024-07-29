import { Image } from "antd"
import pic1 from "../../../assets/images/pic1.jpg"
import pic2 from "../../../assets/images/pic2.jpg"
import pic3 from "../../../assets/images/pic3.jpg"
import pic4 from "../../../assets/images/pic4.jpg"
import { useMemo, useState } from "react"

export default function ProductGallery() {
    const [preview, setPreview] = useState(pic4)

    return (
        <div className="flex gap-8">
            {useMemo(() => (
                <div className="flex flex-col gap-4 w-[15%]">
                    <img src={pic1} alt="" onClick={() => setPreview(pic1)} className="cursor-pointer" />
                    <img src={pic2} alt="" onClick={() => setPreview(pic2)} className="cursor-pointer" />
                    <img src={pic3} alt="" onClick={() => setPreview(pic3)} className="cursor-pointer" />
                    <img src={pic4} alt="" onClick={() => setPreview(pic4)} className="cursor-pointer" />
                </div>
            ), [])}
            <div className="w-[85%]">
                <Image src={preview} />
            </div>
        </div>
    )
}
