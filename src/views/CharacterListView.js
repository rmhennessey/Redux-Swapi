import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { getChar } from '../actions';


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <p>LOADING...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

//this is our upper management that goes into the store (reducers)
const mapStateToProps = state => ({
  isFetching: state.charsReducer.isFetching,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error

});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {getChar}
)(CharacterListView);
