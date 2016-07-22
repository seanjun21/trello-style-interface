var React = require( 'react' );
var List = require ('./list');
var Card = require ('./card');

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

module.exports = ListContainer;
