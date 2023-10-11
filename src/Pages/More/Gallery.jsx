import { useState } from "react"
import { GalleryList } from "../../Components/Lists/GalleryList"
import { Slider } from "../../Components/Cards"

export default function Gallery(){
    const[img,setimg]=useState("")
    const [hidden,sethidden]=useState(false)
    const gallery=GalleryList.map((data)=>{
        return(
            (data.have &&<div>
                <h1 className="text-2xl font-bold pt-8 pb-4">{data.name}</h1>
                <div className="grid place-items-center">
                    <div className="xl:w-1/2 lg:w-2/3 md:w-4/5 w-11/12 flex flex-wrap gap-8 justify-center" onClick={()=>setimg(data.allimg)}>
                        {data.allimg.map((d)=>{
                            return(
                                <div style={{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center"}} className="p-28" onClick={()=>{sethidden(true)}}/>

                            )

                        })}
                    </div>
                </div>
                {hidden && <Slider hidden={hidden} img={img} sethidden={sethidden}/>}
            </div>)
        )
    })
    return(
        <div className="text-center grid gap-5 gallery py-32 lg:py-14">
            <div>
                <h1 className="text-7xl font-bold text-primary">GALLERY</h1>
                <h1 className="text-xl text-secondary font-semibold ">What goes on in the Event?</h1>
                {gallery}
            </div>
            
        </div>
    )
}