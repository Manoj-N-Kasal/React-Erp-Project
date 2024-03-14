import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Dashboard/Header'
import Home from './components/Dashboard/Home'
import ProductList from './components/ProductsManagement/ProductList'
import  Calendar  from './components/OrdersCalendarView/Calendar'
import './App.css'
import OrderManagement from './components/OrdersManagement/OrderManagement';
import prod1 from './Images/prod1.png'
import prod2 from './Images/prod2.jpg'
import prod3 from './Images/prod3.jpg'
import prod4 from './Images/prod4.jpg'
import prod5 from './Images/prod5.png'
import prod6 from './Images/prod6.jpg'
function App() {

  const[initialProductsApp,setProdutsApp]= useState([
    { id: 1, name: 'Product 1', category: 'Men', price: 10, stockQuantity: 100,imageUrl:prod1},
    { id: 2, name: 'Product 2', category: 'Women', price: 20, stockQuantity: 200,imageUrl:prod2 },
    { id: 3, name: 'Product 3', category: 'Kids', price: 30, stockQuantity: 300,imageUrl:prod3 },
    { id: 4, name: 'Product 4', category: 'Men', price: 40, stockQuantity: 400,imageUrl:prod4 },
    { id: 5, name: 'Product 5', category: 'Kids', price: 50, stockQuantity: 500,imageUrl:prod5 },
    { id: 6, name: 'Product 6', category: 'other', price: 8, stockQuantity: 10,imageUrl:prod6 },
  ])

  const handleProductsChange =(newProducts) =>{
    setProdutsApp(newProducts);
  }
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route index element={<Home initialProductsApp={initialProductsApp}/>}/>
          <Route path='ordermanagement' element={<OrderManagement/>}/>
          <Route path='produclists' element={<ProductList initialProductsApp={initialProductsApp}  onProductsChange={handleProductsChange}/>}/>
          <Route path='calendarview' element={<Calendar/>}/>
        </Route>
        </Routes>
      </Router>

     
    </>
  )
}

export default App

/* 
counterPRoooo
// App.js
import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (newCount) => {
    setCounter(newCount);
  };

  return (
    <div>
      <Component1 counter={counter} />
      <Component2 counter={counter} updateCounter={updateCounter} />
    </div>
  );
}

export default App;
jsx
Copy code
// Component1.js
import React from 'react';

function Component1({ counter }) {
  return <div>Counter Value in Component 1: {counter}</div>;
}

export default Component1;
jsx
Copy code
// Component2.js
import React, { useState } from 'react';

function Component2({ counter, updateCounter }) {
  const [newCount, setNewCount] = useState(0);

  const handleInputChange = (event) => {
    setNewCount(parseInt(event.target.value));
  };

  const handleUpdateCounter = () => {
    updateCounter(newCount);
  };

  return (
    <div>
      <div>Counter Value in Component 2: {counter}</div>
      <input type="number" value={newCount} onChange={handleInputChange} />
      <button onClick={handleUpdateCounter}>Update Counter</button>
    </div>
  );
}

export default Component2;*/