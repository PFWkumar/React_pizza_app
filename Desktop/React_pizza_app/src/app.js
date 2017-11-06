import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Filter from './filter';
import PizzaList from './pizzaList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching   : true,
      searchString : '',
      pizzas       : [],
    };
    this.sortDesc = this.sortDesc.bind(this);    
    this.handleChange = this.handleChange.bind(this);    
  }
  componentDidMount() {
    fetch('../pizza.json').then((resp) => {
      return resp.json();
    }) 
    .then((data) => {
      this.setState({
        isFetching : false,
        pizzas     : data.pizzas,
      });
    });
  }
  sortDesc() {
    this.setState(prevState => ({
      pizzas : prevState.pizzas.sort().reverse(),
    }));
  }
  handleChange(e) {
    this.setState({
      searchString:e.target.value,
    });
  }
  render() {
    const { isFetching, pizzas, searchString } = this.state;
    return (
      <div className="App">
        {isFetching ? (
          <div>Loading..</div>
        ) : (
          <div>
            <Filter
              searchString={searchString}
              handleChange={this.handleChange}
              sortDesc={this.sortDesc}
            />
            <PizzaList 
              searchString={searchString}
              list={pizzas}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
