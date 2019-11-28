import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import WishList from './WishList'

class App extends Component {

  state = {
    preferences:[]
  }
addPreference = (preference) => {
  this.setState({ preferences: [...this.state.preferences, preference ] })
}

removePreference = (preference) => {
  console.log(preference)
  this.setState({
    preferences: this.state.preferences.filter((p) => {
      return p.name !== preference.name
    })
  })
}

//a lifecycle method that runs once when the componenet
//has first loaded right after the first render
componentDidMount() {
  this.setState({
      preferences: [
          { name: "Test 1"},
          { name: "Test 2"}
      ]
  })
}

  render() {
    const { preferences } = this.state
    console.log(preferences)
    return (
      <div className="App">
         <h1>Preferences</h1>
          <Form onFormSubmit={this.addPreference}/>
          <WishList onRemoveClick={this.removePreference} preferences={this.state.preferences} />
      </div>
    );
  }
}

export default App;
