import Cards from "@/components/Cards/Cards"
export default function shoes (){
    const shopCards = [
        {
            prize: 300,
            imgsrc: '/images/bag1.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag2.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag5.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag4.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag6.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag7.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag8.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/bag9.jpg'
        },
    ]
    return <div className="shop-container">
         {shopCards.map((shopCard, index) => <Cards prize={shopCard.prize} item={shopCard} imgsrc={shopCard.imgsrc} key={index} btnState="Buy"/>)}
    </div>
}