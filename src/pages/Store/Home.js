import React, { useEffect, useState } from 'react';
import Product from '../../components/Products';
import { Row, Col } from 'antd';
import { getProducts } from '../../service/productService'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(); 
      console.log('Fetched products:', data); 

      setProducts(data.$values); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Bienvenido a la Tienda</h1>
      <Row gutter={16}>
        {Array.isArray(products) && products.length > 0 ? ( 
          products.map((product) => (
            <Col span={8} key={product.id_producto}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </Row>
    </div>
  );
};

export default Home;