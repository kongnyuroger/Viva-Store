import bag1 from "@/public/images/bag1.jpg"
import Image from "next/image"
import BuyBtn from "../buyBtns/btn"
import './Cards.css'

interface Props{
    prize: number
    imgsrc: string
    item: object
    btnState: string
    itemToDelete: number

    
}
export default function Cards({prize, imgsrc, item, btnState, itemToDelete}: Props){
    return <div className="shop-cards">
        <div className="card">
                <div className="card_image-box">
                 <Image className="card_image-box_img" src={imgsrc} width ={250} height={300}   alt="bag-img" />
                </div>
                <div className="card_text">
                    <h3 className=".card_text_price">{prize} $</h3>
                    <BuyBtn prize={prize} item={item} btnState={btnState} itemToDelete={itemToDelete}/>
            
                </div>
            </div>
    </div>
    
}