import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import ordersData from '../../helpers/data/ordersData';
import './Orders.scss';
import OrderRow from '../OrderRow/OrderRow';

class Orders extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('cant get orders', err));
  }

  render() {
    const orderComponents = this.state.orders.map(order => (
      <OrderRow key={order.id} order={order} />
    ));

    return (
      <div className="Orders">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order #</th>
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