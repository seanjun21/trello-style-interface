// jshint ignore: start

var React = require('react');
var ReactDOM = require('react-dom');

var Card = function( props ) {
    console.log( props, 'PROPS' );
    return (
        <div className="card">
            <div className="card-text">{props.text}</div>
        </div>
    );
};

var List = function( props ) {
    props.cards = ["This is a text 1", "This is a text 2", "This is a text 3"];
    var firstCard = props.cards[0];
    <Card /> 
    return (
        <div className="list">
            <div className="list-title">{props.title}</div>
            <div className="card-list">{ cards }</div>
        </div>
    );
};

var Board = function() {
    var list = [];
    for ( var i = 0; i < 5; i++ ) {
        list.push( <List /> );
    }
    return (
        <div className="board">
            { list }
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
