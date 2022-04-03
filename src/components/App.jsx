import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import { robots } from "../database/robots"
import '../style/App.css'


class App extends React.Component {

    constructor(){

        super()
        
        this.state = {

            robots: robots,
            searchField: ''

        }
    }
    
    searchOnChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return(

            <div className="app">
                <h1 className="title">Deer robot friends</h1>
                <SearchBox searchChange={this.searchOnChange}/>
                <CardList robots={filteredRobots}/>
            </div>

        )
    }

}

export default App