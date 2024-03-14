import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,BsBoxFill }
  from 'react-icons/bs' 
import CustomerReview from './CustomerReview/CustomerReveiw'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import './Home.css'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'


function Home({initialProductsApp}) {
  const totalProducts = initialProductsApp.length;

  // Calculate total sum of stock quantities
  // const totalStockQuantity = initialProductsApp.reduce((total, product) => total + product.stockQuantity, 0);
  const totalStockQuantity = initialProductsApp.reduce((total, product) => total + parseInt(product.stockQuantity), 0);
  const uniqueCategories = [...new Set(initialProductsApp.map(product => product.category))];
  const totalCategories = uniqueCategories.length;

  const sortedProducts = [...initialProductsApp].sort((a, b) => b.stockQuantity - a.stockQuantity);
  const top5Products = sortedProducts.slice(0, 5);

  const UpdatesData = [
    {
      id: 1,
      img: img1,
      name: "Akash",
      noti: "has received order Products from category1.",
      time: "Just now",
    },
    {
      id: 2,
      img: img2,
      name: "Alice",
      noti: "has canceled order of Product 5.",
      time: "30 minutes ago",
    },
    {
      id: 3,
      img: img3,
      name: "John",
      noti: "has ordered Product1, Product2.",
      time: "2 hours ago",
    },
  ];
  
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS <span><BsFillArchiveFill className='card_icon' /></span></h3>
          </div>
          <h1>{totalProducts}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Stocks <span><BsBoxFill className='card_icon' /></span></h3>
          </div>
          <h1>{totalStockQuantity}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES <span><BsFillGrid3X3GapFill className='card_icon' /></span></h3>
          </div>
          <h1>{totalCategories}</h1>
        </div>
        
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS <span><BsFillBellFill className='card_icon' /></span></h3>
            
          </div>
          <h1>42</h1>
        </div>
      </div>
      <div className='BarGraph'>
      <BarChart width={500} height={450} data={top5Products}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="stockQuantity" fill="#ff929f" />
    </BarChart>
      </div>
      <div className="updateDataClass">
        <h2>Updates</h2>
      {UpdatesData.map((update) => (
      <div key={update.id} className="update">
      <img src={update.img} alt="profile" />
       <div className="noti">
      <div style={{ marginBottom: '0.5rem' }}>
        <span>{update.name}</span>
        <span> {update.noti}</span>
      </div>
      <span>{update.time}</span>
    </div>
  </div>
))}

      </div>
      <div className='custClass'>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
      

    </main>
  )
}

export default Home

