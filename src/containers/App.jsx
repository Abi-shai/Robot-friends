import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import users from '../database/robots'
import './App.css'


const App = () => {

    // States
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    
    const searchOnChange = (event) => {
        setSearchField(event.target.value)
    }

    useEffect(() => {
        setRobots(users)
    }, [])
        
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })    
    return !robots.length ?
        <div>Loading</div> :
        (
        <div className="app">
            <h1 className="title">Deer robot friends</h1>
            <SearchBox searchChange={searchOnChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
}

export default App