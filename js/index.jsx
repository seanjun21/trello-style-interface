// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Board = function() {
  return (
    <div className="board">
      <div className="board-title">Board</div>
      <div>
        <ListContainer title="Sean's iPhone from craigslist" />
      </div>
    </div>
  )
}


var ListContainer = React.createClass( {
  getInitialState: function() {
    return {
      text: '',
      cards: []
    }
  },
  onAddInputChange: function( event ) {
    this.setState( {
      text: event.target.value
    } );
  },
  onAddClick: function() {
    // event.preventDefault();
    var cardsList = this.state.cards;
    cardsList.push( <Card text={ this.state.text } /> );
    console.log( cardsList );
    this.setState( {
      cards: cardsList,
      text: ''
    } );
  },
  render: function() {
    return (
      <List title={this.props.title} text={this.state.text} cards={this.state.cards} onAddInputChange={this.onAddInputChange} onAddClick={this.onAddClick} />
    )
  }
} );


var List = React.createClass( {

  render: function() {
    return (
      <div className="list">
        <div className="list-title">{ this.props.title }</div>
        <div>{ this.props.cards }</div>
        <input type="text" value={ this.props.text } onChange={ this.props.onAddInputChange }/>
        <button onClick={ this.props.onAddClick }></button>
      </div>
    );
  }
} );


var Card = function( props ) {
  return (
    <div className="card">{ props.text }</div>
  );
};


document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( < Board / > , document.getElementById( 'app' ) );
} );
