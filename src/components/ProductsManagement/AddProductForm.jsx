import React, { useState } from 'react';
import './AddProductForm.css'

const AddProductForm = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '', imageUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct({ ...newProduct, imageUrl: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newProduct.name ==="" || newProduct.category ==="" || newProduct.price==="" || newProduct.stockQuantity===""){
      alert("Please fill all the details");
      return;
    } 
    addProduct(newProduct);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '', imageUrl: '' });
  };

  return (
    <div className="formClass">
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" />
      <input type="number" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price"  min={0}/>
      <input
        type="number"
        name="stockQuantity"
        value={newProduct.stockQuantity}
        onChange={handleChange}
        placeholder="Stock Quantity"
        min={0}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {newProduct.imageUrl && <img src={newProduct.imageUrl} alt="Product" style={{ maxWidth: '100px' }} />}
      <button className='addBtn' type="submit">Add Product</button>
    </form>
    </div>
  );
};

export default AddProductForm;
