import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
	const { branding } = props
	return (
		<div>
			<h1 style={brandingStyle} >{branding}</h1>
		</div>
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

