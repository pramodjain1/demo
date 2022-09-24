import Image from "next/image";
import Vercel from "../public/images/vercel.svg"

const LoadImage = (props: any) => {
    const imageSrc = '/images/' + (props.name || 'vercel.svg');
    return (
        <>
            <Image key={1} src={imageSrc} height={props.height || 100} width={props.width || 100} alt="" />
        </>
    )
}

export default LoadImage;