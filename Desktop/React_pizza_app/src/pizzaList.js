import React from 'react';
import PropTypes from 'prop-types';

const filter = ({ list, searchString }) => {
	searchString = searchString.trim().toLowerCase();
	if(searchString.length > 0){
		list = list.filter(item => {
			return item.toLowerCase().match( searchString )
		});
	}
	return(
		<ul> 
			{list.map(item => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
};

filter.propTypes = {
  list: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired
};

export default filter;
