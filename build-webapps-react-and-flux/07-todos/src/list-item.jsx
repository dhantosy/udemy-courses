var React = require('react');
var Firebase = require('firebase'); 
var rootUrl = 'https://blistering-heat-2870.firebaseio.com/';

module.exports = React.createClass ({
	getInitialState: function() {
		return {
			text: this.props.item.text,
			done: this.props.item.done,
			textChange: false
		}
	},
	/* must create firebase object */
	componentWillMount: function() {
		/* get id from list */
		this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
	},
	render: function() {
		return <div className="input-group">
			<span className="input-group-addon">
				<input 
					type="checkbox" 
					checked={this.state.done}
					onChange={this.handleDoneChange}
				/>
			</span>
			<input type="text"
				disabled={this.state.done}
				className="form-control"
				value={this.state.text}
				onChange={this.handleTextChange}
				/>
			<span className="input-group-btn">
				{this.changesButtons()}
				<button 
					className="btn btn-default"
					onClick={this.handleDeleteClick}
				>
					Delete
				</button>
			</span>
		</div>
	},
	changesButtons: function() {
		if(!this.state.textChanged) {
			return null
		} else {
			return [ 
				<button 
					onClick={this.handleSaveClick}
					className="btn btn-default"
					>
					Save
				</button>,
				<button 
					onClick={this.handleUndoClick}
					className="btn btn-default"
					>
					Undo
				</button>
			]
		}
	},
	handleSaveClick: function() {
		this.fb.update({text: this.state.text});
		this.setState({textChanged: false});
	},
	/* pass event whenever need callback from element */
	handleUndoClick: function(event) {
		this.setState({
			text: this.props.item.text,
			textChanged: false
		});
	},
	/* pass event whenever need callback from element */
	handleTextChange: function(event) {
		this.setState({
			text: event.target.value,
			textChanged: true
		})
	},
	/* pass event whenever need callback from element */
	handleDoneChange: function(event) {
		var update = {done: event.target.checked}
		this.setState(update);
		this.fb.update(update);
	},
	handleDeleteClick: function() {
		this.fb.remove();
	}
});

// When creating controlled value in input,
// must create getInitialState