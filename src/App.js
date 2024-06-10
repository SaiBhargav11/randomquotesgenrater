import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
     .then(response => response.json())
     .then(data => {
        this.setState({ quotes: data });
      })
     .catch(error => console.error('Error fetching quotes:', error));
  }

  getRandomQuote() {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
    return null;
  }

  render() {
    const randomQuote = this.getRandomQuote();

    return (
      <div className="App">
        <h1 className='head'>Ron Swanson Quote</h1>
        <div className='con'>
          <div className='card'>{randomQuote}</div>
        </div>
      </div>
    );
  }
}

export default App;