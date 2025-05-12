import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Captura o ID do produto da URL
  return (
    <section className="product-detail">
      <h2>Detalhes do Produto {id}</h2>
      <p>Informações específicas do produto.</p>
    </section>
  );
};

export default ProductDetail;