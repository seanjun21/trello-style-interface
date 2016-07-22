var React = require( 'react' );

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

module.exports = List;