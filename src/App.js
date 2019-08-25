import React, {Component} from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

class App extends Component {

  state = {
    monsters: [],
    searchField : '',
  };

  handleChange=(e)=> {
    this.setState({searchField:e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <Search 
          placeholder="search monsters" 
          onChange = {this.handleChange} 
          value={this.state.searchField}
        />
        <CardList monsters ={filteredMonsters} />

      </div>
    );
  }
}

export default App;
