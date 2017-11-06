import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'code';
import sinon from 'sinon';
import Filter from '../src/filter';

describe('Filter View', () => {
	const onButtonClick = sinon.spy();
	const onTextChange = sinon.spy();
  const filterView = shallow(
    <Filter
      searchString=""
      handleChange={onTextChange}
      sortDesc={onButtonClick}
    />
  );
  it('should have two inputs', () => {
      expect(filterView.find('input')).to.have.length(2);
  });
  it('should have one text box', () => {
      expect(filterView.find('input[type="text"]')).to.have.length(1);
  });
  it('should have one button', () => {
      expect(filterView.find('input[type="button"]')).to.have.length(1);
  });
  it('onButtonClick Function should be called', () => {
      filterView.find('input[type="button"]').simulate('click');
      expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('onTextChange Function should be called', () => {
      filterView.find('input[type="text"]').simulate('change');
      expect(onTextChange.calledOnce).to.equal(true);
  });
});
