var React = require('react');
//for communicating react with database in firebase
var ReactFire = require('reactfire');
//communicate online data store and get data back to browser
var Firebase = require('firebase'); 
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://blistering-heat-2870.firebaseio.com/';

var App = React.createClass({
	/* reactfire copy paste to our component */
	mixins: [ ReactFire ],
    getInitialState: function() {
        return {
            items: {},
            loaded: false
        }
    },
	/* Create network request and look for date */
	/* Request only once when DOM loaded*/
    /* Pass object to firebaseRefs to be rendered */
	componentWillMount: function() {
        /* Long version */
        // this.fb = new Firebase(rootUrl + 'items/');
        // this.bindAsObject(fb, 'items');
        // this.fb.on('value', this.handleDataLoaded);

        /* Short version */
        this.fb = new Firebase(rootUrl + 'items/');
        this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
        this.fb.on('value', this.handleDataLoaded);
	},
    render: function() {
    return <div className="row panel panel-default">
    	<div className="col-md-8 col-md-offset-2">
    		<h2 className="text-center">
    			To-Do List
    		</h2>
    		<Header itemsStore={this.firebaseRefs.items} />
            <hr />
            <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
                <List items={this.state.items} />
                {this.deleteButton()}
            </div>
    	</div>
    </div>
  },
  deleteButton: function() {
    if(!this.state.loaded) {
        return
    } else {
        return <div className="text-center clear-complete">
            <hr/>
            <button 
                type="button"
                onClick={this.onDeletedDoneClick}
                className="btn btn-default"
                >
                Clear Complete
            </button>
        </div>
    }
  },
  /* loop  */
  onDeletedDoneClick: function() {
    for(var key in this.state.items) {
        if(this.state.items[key].done === true) {
            this.fb.child(key).remove();
        }
    }
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
