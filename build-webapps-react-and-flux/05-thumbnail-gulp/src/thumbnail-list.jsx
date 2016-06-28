/* install from command line */
var React = require('react');
/* not install from command line - get using path file */
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });

    return <div>
      {list}
    </div>
  }
});