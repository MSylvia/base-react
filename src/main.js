// Main
// Matt Sylvia <matthew.sylvia@xamarin.com>

var React = require('react');
var DOM   = React.DOM;
var _     = require('lodash');
var $     = require('jquery');

//----------------------------

var Main = React.createClass({
    displayName: 'Main',

    getDefaultProps: function() {
        return { 

        };
    },

    componentDidMount: function() {
        var self = this;
    },

    render: function() {
        return DOM.div({}, "Hello World" );
    }
});

//----------------------------

module.exports = Main;