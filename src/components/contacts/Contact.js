import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

export default class Contact extends Component {
	state = {
		expandContactDetails: false
	}

	onShowClick = (e) => {
		this.setState({
			expandContactDetails: !this.state.expandContactDetails
		})
	}

	onDeleteClick = (id, dispatch) => {
		dispatch({ type: 'DELETE_CONTACT', payload: id })
	}

	render() {
		const { id, name, email, phone } = this.props.contact
		const { expandContactDetails } = this.state

		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					return (
						<div className="card card-body mb-3">
							<p className="primary">
								{name}
								<i
									onClick={this.onShowClick}
									className="fas fa-sort-down mr-auto"
									style={{ cursor: "pointer" }}
								></i>
								<i
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
									className="fas fa-times"
									style={{ cursor: "pointer", float: 'right', color: 'red' }}
								></i>
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
				}}
			</Consumer>
		)
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}
