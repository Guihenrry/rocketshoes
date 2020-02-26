import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductTable,
  Total,
  CartEmpty,
  Button,
  Footer,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart, updateAmountRequest, total, history }) {
  function icrement(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th> </th>
                <th>Produto</th>
                <th>QTD</th>
                <th>Subtotal</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormated}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button" onClick={() => icrement(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subTotal}</strong>
                  </td>

                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <Footer>
            <Button type="button">Finalizar pedido</Button>

            <Total>
              <span>Total</span>
              <strong>{total}</strong>
            </Total>
          </Footer>
        </>
      ) : (
        <CartEmpty>
          <MdRemoveShoppingCart size={60} color="#ccc" />
          <h1>Seu carrinho está vazio</h1>

          <p>
            Adicione produtos clicando no botão “Adicionar ao carrinho” na
            página de produto.
          </p>

          <Button type="button" onClick={() => history.push('/')}>
            Voltar para o inicio
          </Button>
        </CartEmpty>
      )}
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      priceFormated: PropTypes.string,
      amount: PropTypes.number,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.products.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.products.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
