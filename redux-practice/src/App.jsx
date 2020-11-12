import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieslist } from './actions';
import { bindActionCreators } from 'redux';
import Functional from './functional';
import Hooks from './hooks';
class App extends Component {
  componentDidMount(){
    this.props.getMovieslist();
  }
  render(){
    console.log(this.props);
    return (
      <div className="App">
        <Hooks/>
        {/* { 
          this.props.movies ?
          this.props.movies.map((item) =>(
          <div key={item.id}>
            {item.name}
          </div>
          )) : null} */}
      </div>
    );
  }
}
//global redux state
// function mapStateToProps(state){
//   // console.log(state);
//   return {
//     movies: state.movies
//   }
// }
const mapStateToProps = state => ({
  movies: state.movies
})

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({getMovieslist}, dispatch);
// }
const mapDispatchToProps = dispatch => (
  bindActionCreators({getMovieslist}, dispatch)
)
//connect will grab the states and 
export default connect(mapStateToProps, mapDispatchToProps)(App);
