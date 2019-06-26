import React from 'react';

import './Inventory.scss';
import fishData from '../../helpers/data/fishData';
import Fish from '../Fish/Fish';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('could not get fishes', err));
  }

  render() {
    const fishComponents = this.state.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
    ));

    return (
        <div className="Inventory">
          <h2>Inventory</h2>
          <ul className="fishes">
            {fishComponents}

          </ul>
        </div>
    );
  }
}

export default Inventory;