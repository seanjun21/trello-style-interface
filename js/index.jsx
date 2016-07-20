// jshint ignore: start

var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var ListContainer = React.createClass ({
    getInitialState: function() {
        return {
            text: '',
            cards: []
        }
    },
    onAddInputChange: function() {
        this.setState({value: event.target.value});
    },
    onAddClick: function() {
        this.setState( {
            clicked: true
        } );
        console.log(this.state);
    },
    render: function () {
        return (
            <List title={this.props.title} cards={this.props.cards} onAddClick={this.onAddClick} onAddInputChange={this.onAddInputChange} />
        )
    }
});

var Card = function( props ) {
  return (
    <div className="card">{ props.text }</div>
  );
};

var List = React.createClass ({

    render: function () {
        return (
            <div className="list">
                <div className="list-title">{ this.props.title }</div>
                <div>{ this.props.cards }</div>
                <input type="text" onChange={ this.props.onAddInputChange }/>
                <button onClick={ this.props.onAddClick }></button>
            </div>
        );
    }
});

var Board = function() {

  return (
    <div className="board">
      <div className="board-title">Board</div>
      <div>
        {[
            <ListContainer title="List 1" cards={[
            <Card text="Card 1" />,
            <Card text="Card 2" />,
            <Card text="Card 3" />
          ]} />
        ]}
      </div>
    </div>
  )
}

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( < Board / > , document.getElementById( 'app' ) );
} );
