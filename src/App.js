import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    }
}

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        }
      )
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div className="App">
          <header className="App-header">
            <h1>ReactJS</h1>
          </header>
          <div className="App-body">
            <ul>

              {items.map(item => (
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.url}</p>
                  <p>{item.thumbnailUrl}</p>
                  <br></br>
                </li>
              ))}
              
            </ul>
          </div>
        </div>

      );
    }
  }
}

export default App;
