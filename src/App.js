import React, { Component } from 'react';
import List from './List';
import './App.css';
import { STORE } from './store';

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  state = STORE;
  deleteCard = (id) => {
    const allCards = omit(this.state.allCards, id)
    const lists = this.state.lists.map(list => ({
      ...list,
       cardIds: list.cardIds.filter(cardId => cardId !== id)
    }))
    this.setState({allCards, lists})
  }
  addRandomCard = (listId) => {
    const newCard = newRandomCard()
    const allCards = {
      ...this.state.allCards, 
      [newCard.id]:newCard
    }
    const lists = [...this.state.lists]
    lists.find(list => list.id === listId).cardIds.push(newCard.id)
    this.setState({allCards, lists})
  }
  render() {
    const { state } = this.state
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
           <List
           key={list.id}
           header={list.header}
           cards={list.cardIds.map(id => this.state.allCards[id])}
           deleteCard={this.deleteCard}
           addCard={() => this.addRandomCard(list.id)}
          />
        ))}
      </div>
      </main>
    );
  }
}

export default App;