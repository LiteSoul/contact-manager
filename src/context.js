import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(contact =>
					contact.id !== action.payload)
			}
		default:
			return state
	}
}

export class Provider extends Component {
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
		],
		dispatch: action =>
			this.setState(state => reducer(state, action))
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer