// jshint ignore: start

var React = require('react');
var ReactDOM = require('react-dom');

/*A component is just a function that returns a React element*/
/*Components can contain other React components*/

// Takes a 'text' prop that contains the content of the card
var Card = function( props ) {
    console.log( props, 'PROPS' );
    return (
        <div className="card">
            <div className="card-text">{props.text}</div>
        </div>
    );
};

// Takes a 'title' prop that contains the title of the list
// Takes a 'cards' prop that contains the contents of the cards
var List = function( props ) {
    return (
        <div className="list">
            <div className="list-title">{props.title}</div>
            <Card text="Content 1" />
            <Card text="Content 2" />
            <Card text="Content 3" />
            <Card text="Content 4" />
        </div>
    );
};

// Takes a 'title' prop that contains the title of the board
// Takes a 'lists' prop that contains an array of the titles of the boards lists
var Board = function( props ) {
    var listTitles = [];
    for (var i = 0; i < listTitles.length; i++) {
        listTitles.push(<List />)
    }
    return (
        <div className="board-div">
            <div className="board-title">{props.title}</div>
            <List title="List 1" />
            <List title="List 2" />
            <List title="List 3" />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Board 1" />, document.getElementById('app'));
});