var React = require( 'react' );
var TestUtils = require( 'react-addons-test-utils' );
var should = require('chai').should();
var Board = require ('../js/board');

describe('Board component', function() {
  it('Stores the ListContainer', function() {
  var renderer = TestUtils.createRenderer();
  renderer.render( <Board /> );
  var result = renderer.getRenderOutput();
  console.log(result);
  result.props.className.should.equal( 'board' );
  });
});


