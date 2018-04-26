import React from 'react'
import flingos from './flingos.jpg'
import ball from './ball.jpg'
import StoryImages from './StoryImages'

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
		this.state = {
			gameStage: this.props.gameStage
		}
	}
	
	render(){

		const stageImages = images.filter(img => img.id === this.state.gameStage)

		return(
			<div className = 'story'>
				<StoryImages images={stageImages} />
			</div>
			)
	}
}

export default Story