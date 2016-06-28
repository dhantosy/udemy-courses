var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');


module.exports = React.createClass({

	handleClick: function() {
		this.setState({open: !this.state.open});		
	},
	getInitialState: function() {
		return {open: false}
	},
	handleItemClick: function(item) {
		this.setState({
			open: false,
			itemTitle: item
		});
	},
	render: function() {
		// APPROACH 1
		// items = this.props.items.map(function(item) {
		// 	retun <li>{items}</li>
		// })

		// APPROACH 3
		var list = this.props.items.map(function(item) {
			return <ListItem 
							item={item} 
							whenItemClicked={this.handleItemClick}
							className={this.state.itemTitle === item ? "active" : "" }
						/>
		}.bind(this));

		return <div className="dropdown">
			<Button 
				whenClicked={this.handleClick} 
				className="btn-default" 
				title={this.state.itemTitle || this.props.title} 
				subTitleClassName="caret" />

			<ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
				{list}
			</ul>

		</div>
		// APPROACH 1
		// <ul>{items}</ul>
	}

})

// APPROACH 2
//<list items={this.props.items} />

// APPROACH 3
// <ul>
// 	{list}
// </ul>

//APPROACH 2
//Inside list.jsx
// render: function() {
// 	this.props.items.map(function(item) {
// 		return	<listItem item={item} />
// 	})

// 	return <ul>
// 		{list}
// 	</ul>
// }

// inside listitem.jsx
// render: function() {
// 	return <li>{this.props.item}</li>
// }

// APPROACH 3
//Inside listitem.jsx
// render: function() {
// 	return <li>{this.props.item}</li>
// }




