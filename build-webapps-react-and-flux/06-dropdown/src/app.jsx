/* install from command line */
var React = require('react');
/* not install from command line - get using path file */
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // Wah should show up on the button
  items: [ //list of items
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
}

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));