import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import WishList from './WishList'

class App extends Component {

  state = {
    gifts:[]
  }
addGift = (gift) => {
  this.setState({ gifts: [...this.state.gifts, gift ] })
}

removeGift = (gift) => {
  console.log(gift)
  this.setState({
    gifts: this.state.gifts.filter((g) => {
      return g.name !== gift.name
    })
  })
}

//a lifecycle method that runs once when the componenet
//has first loaded right after the first render
componentDidMount() {
  this.setState({
      gifts: [
          { name: "Test 1"},
          { name: "Test 2"}
      ]
  })
}

  render() {
    const { gifts } = this.state
    console.log(gifts)
    return (
      <div className="App">
         <h1>Preferences</h1>
          <Form onFormSubmit={this.addGift}/>
          <WishList onRemoveClick={this.removeGift} gifts={this.state.gifts} />
      </div>
    );
  }
}

export default App;
