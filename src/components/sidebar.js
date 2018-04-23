import React from 'react'
import SidebarItems from './SidebarItems'

class Sidebar extends React.Component {

	render () {
		return (
			<div className="Sidebar">
				<p>I will be a sidebar</p>
				<SidebarItems />
			</div>
			)
	}
}

export default Sidebar;