import React from 'react'

const Header = props => {
	const { branding } = props
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py--0">
			<div className="container">
				<a className="navbar-brand" href="#logo">{branding}</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="/" className="nav-link">Home</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">About</a>
						</li>
					</ul>
				</div>
				<ul className="navbar-nav"></ul>
			</div>
		</nav>
	)
}

export default Header

