import React from 'react'
import Story from './Story'

class GameWindow extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			gameStage: 1
		}
	}

	changeStage = (props) => {
		const stage = this.props
		this.setState({gameStage: stage})
	}

	render(){
		return(
			<div className='gamewindow'>
				<Story gameStage = {this.gameStage} changeStage = {this.changeStage} />
			</div>
			)
	}
}

export default GameWindow;