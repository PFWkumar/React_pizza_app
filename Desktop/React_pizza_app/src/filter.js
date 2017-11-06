import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ searchString, handleChange, sortDesc }) => (
	<div>
		<input
			type="text"
			value={searchString}
			onChange={handleChange}
			placeholder="Type here to filter"
		/>
		<input
			type="button"
			value="Sort Desc"
			onClick={sortDesc}
		/>
  </div>
);

Filter.propTypes = {
  searchString: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  sortDesc: PropTypes.func.isRequired
};

export default Filter;
