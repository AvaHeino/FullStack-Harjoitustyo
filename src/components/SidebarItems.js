import React from 'react'
import SidebarItem from './SidebarItem'

const sidebarItems = [
	{
		title: 'Pelista',
		text: 'Peli on toteutettu osana FullStack websovelluskehityksen harjoitustyota'
	},
	{
		title: 'Tekijanoikeudet',
		text: 'Osa kuvista on Creative Commons'
	},
	{
		title: 'Muuta',
		text: 'Jos haluat kehua pelin tekijaa, ota yhteytta olenihana@kehumail.com'
	}
]
class SidebarItems extends React.Component {
	render () {
		return(
			<div className='Sidebar'>
				<h2>Menu</h2>
				{sidebarItems.map(item => <SidebarItem title={item.title} text={item.text} />)}
			</div>
			)
	}
}

export default SidebarItems;