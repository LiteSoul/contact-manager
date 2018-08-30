import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
	const { branding } = props
	return (
		<nav className="navbar">
			<div className="container">
				<h1 style={brandingStyle} >{branding}</h1>
				<a className="navbar-brand" href="/"></a>
				ul.navbar-nav
			</div>
		</nav>
	)
}

Header.defaultProps = {
	branding: 'Default contact props manager'
}

Header.propTypes = {
	branding: PropTypes.string.isRequired
}

const brandingStyle = { color: 'red' }

export default Header

