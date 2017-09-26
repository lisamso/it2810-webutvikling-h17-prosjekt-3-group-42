import React, { Component } from 'react';
//import PropTypes from 'prop-types'; // ES6

const pageTitle = page => `Welcome to ${page.title}`;

const page = {
  title: 'PIMp',
  subTitle: 'Personal Information Manager',
};

class Home extends Component {
	render() {
		return (
			<div>
				<h1>{pageTitle(page)}!</h1>
				<h3>{page.subTitle}</h3>
			</div>
		)
	}
}

export default Home;
