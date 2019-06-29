import React from 'react';
import './Orders.scss';
import PropTypes from 'prop-types';
import OrderRow from '../OrderRow/OrderRow';

import OrderShapes from '../../helpers/propz/orderShapes';

class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(OrderShapes.orderShape),
    deleteOrder: PropTypes.func.isRequired,
  }
  // componentDidMount() {
  //   ordersData.getMyOrders(firebase.auth().currentUser.uid)
  //     .then(orders => this.setState({ orders }))
  //     .catch(err => console.error('cant get orders', err));
  // }

  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={this.props.deleteOrder}/>
    ));

    return (
      <div className="Orders">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Name</th>
            <th scope="col">Date</th>
            <th scope="col"># Fish</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orderComponents}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Orders;
