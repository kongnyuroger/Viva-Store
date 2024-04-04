import Cards from "@/components/Cards/Cards"
import BuyBtn from "@/components/buyBtns/btn"

export default function shoes (){
    const shopCards = [
        {
            prize: 300,
            imgsrc: '/images/shoe1.jpg',
            discription: 'you made a great chios my dealing with us'
        },
        {
            prize: 300,
            imgsrc: '/images/shoe2.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/shoe3.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/shoe4.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/shoe5.jpg'
        },
       
    ]
    return <div className="shop-container">
            {shopCards.map((shopCard, index) => <Cards prize={shopCard.prize} item={shopCard} imgsrc={shopCard.imgsrc} key={index} btnState="Buy"/>)}
    </div>
}