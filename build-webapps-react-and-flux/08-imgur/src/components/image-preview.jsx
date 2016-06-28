var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass ({
	getInitialState: function() {
		return {
			hovering: false
		}
	},
	render: function() {
		return <Link
			to={"images/" + this.props.id}
			className="image-preview"
			onMouseEnter={this.handleMouseEnter}
			onMouseLeave={this.handleMouseLeave}
			>
			{/* if true, show video, if false shows image */}
			{this.props.animated && this.state.hovering ? this.video() : this.image()}
			{/* if animated and not hovering, show icon. if false nothing */}
			{this.props.animated && !this.state.hovering ? this.icon() : null}
			{/* when element is hover, show inset. if false nothing */}
			{this.state.hovering ? this.inset() : null}
		</Link>
	},
	inset: function() {
		return <div className="inset">
			<span className="views-count">
				Views: {this.props.views}
			</span>
		</div>
	},
	image: function() {
		var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
		var imageStyle = {
			backgroundImage: 'url(' + link + ')'
		};

		return <div style={imageStyle}>
		</div>
	},
	video: function() {
		return <div>
			<video preload='auto' autoPlay='autoplay' loop='loop'>
				<source src={this.props.mp4} type='video/mp4'></source>
			</video>
		</div>
	},
	icon: function() {
		return <span className="glyphicon glyphicon-play"></span>
	},
	handleMouseEnter: function() {
		this.setState({hovering: true})
	},
	handleMouseLeave: function() {
		this.setState({hovering: false})
	}
});