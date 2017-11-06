import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'code';
import PizzaList from '../src/pizzaList';

describe('List View', () => {
  const pizzas = [
    "Sausage",
    "Cheese",
    "Pepperoni",
    "Hawaiian",
    "vegetable",
    "3 cheeSe",
    "macaroni",
    "Chicken",
    "Sausage and Pepperoni"
  ];
  const ListView = (searchString) => shallow(
    <PizzaList 
      searchString={searchString}
      list={pizzas}
    />
  );
  it('should show complete list for empty searchString', () => {
      expect(ListView("").find('li')).to.have.length(pizzas.length);
  });
  it('should show complete list for searchString = Cheese', () => {
      expect(ListView("Cheese").find('li')).to.have.length(2);
  });
  it('should show complete list for searchString = Pepperoni', () => {
      expect(ListView("Pepperoni").find('li')).to.have.length(2);
  });
  it('should show complete list for searchString = Hawaiian', () => {
      expect(ListView("Hawaiian").find('li')).to.have.length(1);
  });
});
