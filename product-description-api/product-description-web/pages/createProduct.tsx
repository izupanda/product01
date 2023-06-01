
import axios from 'axios';
import { useState } from 'react';

interface ProductDescription {
  product_id: string;
  description: string;
}

const CreateProduct = () => {
  const [productId, setProductId] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: ProductDescription = {
      product_id: productId,
      description: description,
    };

    await axios.post('http://localhost:3000/api/product-description', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateProduct;
