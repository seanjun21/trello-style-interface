// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Card = function( props ) {
  return (
    <div className="card">{ props.text }</div>
  );
};

var List = function( props ) {
  return (
    <div className="list">
      <div className="list-title">{ props.title }</div>
      <div>{ props.cards }</div>
    </div>
  );
};

var Board = function() {
  return (
    <div className="board">
      <div className="board-title">Board</div>
      <div>
        {[
          <List title="List 1" cards={[ 
            <Card text="Card 1"/>,
            <Card text="Card 2"/>,
            <Card text="Card 3"/>
          ]}/>, 
          <List title="List 2" cards={[ 
            <Card text="Card 1"/>,
            <Card text="Card 2"/>,
            <Card text="Card 3"/>
          ]}/>,
          <List title="List 3" cards={[ 
            <Card text="Card 1"/>,
            <Card text="Card 2"/>,
            <Card text="Card 3"/>
          ]}/> 
        ]}
      </div>
    </div>
  )
}

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( < Board / > , document.getElementById( 'app' ) );
} );
