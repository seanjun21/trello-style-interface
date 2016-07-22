var React = require( 'react' );
var ListContainer = require ('./listcontainer')

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

module.exports = Board;