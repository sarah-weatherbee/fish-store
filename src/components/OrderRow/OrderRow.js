import React from 'react';
import ordersData from '../../helpers/data/ordersData';

class OrderRow extends React.Component {
  render() {
    const {order} = this.props;
    return (
      <tr>
        <th>{order.id}</th>
        <td>{order.dateTime}</td>
        <td>5</td>
        <td><button className="btn btn-danger">x</button></td>

      </tr>
    );
  }
}

export default OrderRow;