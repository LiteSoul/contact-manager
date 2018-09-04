import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Johna Doe',
				email: 'johna@gmail.com',
				phone: '123-456-789'
			},
			{
				id: 2,
				name: 'Tama Doe',
				email: 'tama@gmail.com',
				phone: '123-456-777'
			},
			{
				id: 3,
				name: 'Crazy Doe',
				email: 'crazy@gmail.com',
				phone: '987-654-321'
			}
		]
	}

	render() {
		const { contacts } = this.state

		return (
			<React.Fragment>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contact={contact}
					/>
				))}
			</React.Fragment>
		)
	}
}
