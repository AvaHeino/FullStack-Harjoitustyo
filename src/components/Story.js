import React from 'react'
import flingos from './flingos.jpg'
import ball from './ball.jpg'
const images = [
{
	id: 1,
	link: flingos
},
{
	id:1,
	link:ball
}
]
class Story extends React.Component {
	constructor(props){
		super(props)
		this.stage = {
			gameStage: this.props.gameStage
		}
	}
	render(){
		return(
			<div className = 'story'>
				<p>I am a story</p>
				<img src={images[0].link} height="42" width="42" alt='a ball' />

			</div>
			)
	}
}

export default Story