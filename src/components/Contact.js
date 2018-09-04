import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
	state = {
		expandContactDetails: false
	}

	onShowClick = (e) => {
		this.setState({
			expandContactDetails: !this.state.expandContactDetails
		})
	}

	render() {
		const { name, email, phone } = this.props.contact
		const { expandContactDetails } = this.state

		return (
			<div className="card card-body mb-3">
				<p className="primary">
					{name}
					<i
						onClick={this.onShowClick}
						className="fas fa-sort-down mr-auto"
					>
					</i>
				</p>
				{expandContactDetails ?
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
					: null
				}
			</div>
		)
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}
