import Cards from "@/components/Cards/Cards"

export default function shoes (){
    const shopCards = [
        {
            prize: 200,
            imgsrc: '/images/watch1.jpg'
        },
        {
            prize: 600,
            imgsrc: '/images/watch2.jpg'
        },
        {
            prize: 1500,
            imgsrc: '/images/watch3.jpg'
        },
        {
            prize: 500,
            imgsrc: '/images/watch4.jpg'
        },
        {
            prize: 300,
            imgsrc: '/images/watch5.jpg'
        },
       
    ]
    return <div className="shop-container">
            {shopCards.map((shopCard, index) => <Cards prize={shopCard.prize} item={shopCard} imgsrc={shopCard.imgsrc} key={index} btnState="Buy"/>)}
    </div>
}