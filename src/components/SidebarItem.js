import React from 'react'

class SidebarItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			textVisible: false 
		}
	}
	render () {
	const hideWhenVisible = { display: this.state.textVisible ? 'none': ''}
	const showWhenVisible = { display: this.state.textVisible ? '' : 'none'}
		return(
			<div>
				<div style={hideWhenVisible}>
					<p onClick={e => this.setState({textVisible: true})}>{this.props.title}</p>
				</div>
				<div style={showWhenVisible}>
					<p onClick={e => this.setState({textVisible: false})}>{this.props.title}</p>
					<p>{this.props.text}</p>
				</div>
			</div>
			)
	
	
	}
}

export default SidebarItem;