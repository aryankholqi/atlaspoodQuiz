import { Image } from "antd"
import { useMemo, useState } from "react"

export default function ProductGallery({ gallery }: { gallery: string[] }) {
    const [preview, setPreview] = useState(gallery[0])

    return (
        <div className="flex flex-col-reverse sm:flex-row gap-8">
            {useMemo(() => (
                <div className="flex flex-row sm:flex-col gap-4 w-[18%] sm:w-[15%]">
                    {gallery.map((pic, index) => (
                        <img key={index} src={pic} alt="" onClick={() => setPreview(pic)} className="cursor-pointer" />
                    ))}
                </div>
            ), [])}
            <div className="sm:w-[85%]">
                <Image src={preview} />
            </div>
        </div>
    )
}