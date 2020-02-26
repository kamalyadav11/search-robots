import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/SearchBox/search-box";

class App extends React.Component {
    state = {
        monsters: [],
        searchField: ""
    };

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    onSearchFieldChange = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;

        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <SearchBox onSearchFieldChange={this.onSearchFieldChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
