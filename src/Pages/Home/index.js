import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList, Loading } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
    loading: true,
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    addingIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data, loading: false });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount, addingIds } = this.props;

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

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
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
}

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
  addingIds: state.cart.addingIds,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
