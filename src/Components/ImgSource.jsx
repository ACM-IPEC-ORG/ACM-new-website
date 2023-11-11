import { useEffect, useState } from "react"
import { Blurhash } from "react-blurhash"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function ImgSource({src}){
    const [imgloaded,setimgloaded]=useState(false)
    useEffect(()=>{
        const img=new Image()
        img.onLoad=()=>{
            setimgloaded(true)
        }
        img.src=src

    },[src])

    return(
        <>
            <div style={{display:imgloaded?"none":"inline"}}>
            <Blurhash
                hash="LWDm,Z~q_N^*8_S5aJRj.9aKRQRQ"
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
            </div>
        <LazyLoadImage
            loading="lazy"
            onLoad={()=>setimgloaded(true)}
            src={src}
            draggable="false"
            alt={src}
            className="rounded-2xl"
        />
        </>
        
    )
}