import React from 'react'

class StoryImages extends React.Component {
	constructor(props){
		super(props)
		this.state={
			images: this.props.images,
			counter: this.props.images.length-1
		}
	}

	componentDidMount(){
		let i = 0
		const x = this.state.counter 

		setInterval(() => {
			console.log(this)
			if(i <= x)
			{
				console.log(this)
				this.setState({
					counter: i
				})
				i += 1
			}
			else {
				console.log('I overdid it')
			}
			
		},5000)
	}

	render(){
		return(
			<div>
				<img src={this.state.images[this.state.counter].link} alt="flamingoes" />
			</div>
			)
	}
}

export default StoryImages;