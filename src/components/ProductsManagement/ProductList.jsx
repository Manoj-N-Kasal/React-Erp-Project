import React, { useState,useEffect } from 'react';
import './ProductList.css'
import ProductItem from './ProductItem';
import AddProductForm from './AddProductForm';
const ProductList = ({initialProductsApp,onProductsChange}) => {
//  const initialProducts = [
//     { id: 1, name: 'Product 1', category: 'Men', price: 10, stockQuantity: 100},
//     { id: 2, name: 'Product 2', category: 'Women', price: 20, stockQuantity: 200 },
//     { id: 3, name: 'Product 3', category: 'Electronics', price: 30, stockQuantity: 300 },
//   ];

  const [products, setProducts] = useState(initialProductsApp);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const resetCategoryFilter = () => {
    setSelectedCategory('');
  };
  const addProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    onProductsChange(products);
  };


  const editProduct = (productId, updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === productId ? { ...product, ...updatedProduct } : product))
    );
    onProductsChange(products);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    onProductsChange(products);
  
  };
  useEffect(() => {
    onProductsChange(products);
  }, [products, onProductsChange]);
  return (
    <div>
      <h2 className='prodManage'>Products Management</h2>
      <div className='categoryClass'>
        <select value={selectedCategory} onChange={(e) => filterProductsByCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="other">Electronics</option>
        </select>
        <button onClick={resetCategoryFilter}>Reset</button>
      </div>
      <AddProductForm  addProduct={addProduct} />
      <div className='itemClass'>
        {products
          .filter((product) => !selectedCategory || product.category === selectedCategory)
          .map((product) => (
            <ProductItem key={product.id} product={product}  editProduct={editProduct}
            deleteProduct={deleteProduct} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
