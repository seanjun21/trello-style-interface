// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Board = function() {

  return (
    <div className="board">
      <div className="board-title">Board</div>
      <div>
        {[
            <ListContainer title="List" cards={[
            <Card text="Card 1" />,
            <Card text="Card 2" />,
            <Card text="Card 3" />
          ]} />
        ]}
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
    this.state.cards.push( <Card text={this.state.text} /> )
    console.log(this.state.text);
    this.setState( {
      cards: this.state.cards
    } );
    console.log( this.state );
    console.log( this.state.cards );
  },

  render: function() {
    return (
      <List title={this.props.title} cards={this.props.cards} onAddClick={this.onAddClick} onAddInputChange={this.onAddInputChange} />
    )
  }
} );


var List = React.createClass( {

  render: function() {
    return (
      <div className="list">
                <div className="list-title">{ this.props.title }</div>
                <div>{ this.props.cards }</div>
                <input type="text" onChange={ this.props.onAddInputChange }/>
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
