'use client'
import Link from 'next/link'
import  './Home.css'
export default function Home (){
  return <div className="home">
    <div className="home_container">
      <h1>Welcome <br />to <br /> Viva store</h1>
      <div className="home_conatainer_services">
        <p>Our services</p>
        <div className="home_container_links">
          <button className='home_conatainer_links_link'><Link href ='./shoes'>Shoes</Link></button>
          <button className='home_conatainer_links_link'><Link href ='./bags'>Bags</Link></button>
          <button className='home_conatainer_links_link'><Link href ='./'>Dresses</Link></button>
          <button className='home_conatainer_links_link'><Link href ='./watches'>Watches</Link></button>
        </div>      
      </div>
    </div>
  </div>
}