import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import { robots } from "../database/robots"
import './App.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    searchOnChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    componentDidMount(){
        this.setState({robots: robots})
    }

    render(){
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return(
            <div className="app">
                <h1 className="title">Deer robot friends</h1>
                <SearchBox searchChange={this.searchOnChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App