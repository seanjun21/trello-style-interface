// jshint ignore: start

var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var name = 'Card';
    var description = 'Description';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <div className="card-description">
                {description}
            </div>
        </div>
    );
};

var List = function() {
    var card = [];
    for ( var i = 0; i < 5; i++ ) {
        card.push( <Card /> );
    }
    return (
        <div className="list">
            { card }
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
