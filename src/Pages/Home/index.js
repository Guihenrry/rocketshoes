import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList, Loading } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.products.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );
  const addingIds = useSelector(state => state.cart.addingIds);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  if (loading) {
    return (
      <Loading>
        <Loader type="Oval" color="#FFF" />
      </Loading>
    );
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              {addingIds.includes(product.id) ? (
                <Loader type="Oval" height={16} width={24} color="#FFF" />
              ) : (
                <>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[product.id] || 0}
                </>
              )}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
