import React, { useState } from 'react';
import './ProductItem.css'

const ProductItem = ({ product, editProduct, deleteProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedProduct({ ...editedProduct, imageUrl: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = () => {
    editProduct(product.id, editedProduct);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className='editClass'>
          <input type="text" name="name" value={editedProduct.name} onChange={handleEditChange} />
          <input type="text" name="category" value={editedProduct.category} onChange={handleEditChange} />
          <input type="number" name="price" value={editedProduct.price} onChange={handleEditChange} />
          <input
            type="number"
            name="stockQuantity"
            value={editedProduct.stockQuantity}
            onChange={handleEditChange}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {editedProduct.imageUrl && <img src={editedProduct.imageUrl} alt="Product" style={{ maxWidth: '100px' }} />}
          <button className='saveBtn' onClick={handleEditSubmit}>Save</button>
        </div>
      ) : (
        <div className='productClass'>
          <img src={product.imageUrl} alt="Product"  />
          <span>Name: {product.name}</span>
          <span>Category: {product.category}</span>
          <span>Price: ${product.price}</span>
          <span>Stocks: {product.stockQuantity}</span>
          <div className="twoBtns">
          <button className='editBtn' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='delBtn' onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
