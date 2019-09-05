import React, { Component } from 'react'

	class Task extends Component {
		render(){
			return ( 
				<div>
					<button>Edit</button>
					<button>X</button>
					<li>{this.props.task}</li>
				</div>
			)
		}
	}
export default Task;