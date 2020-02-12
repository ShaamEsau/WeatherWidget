import React from 'react';
import WeatherApi from './api/weather.json';
import Card from './Components/weeklyWeather.js';


class App extends React.Component {
    /* Initializes Data */
    constructor() {

        /* Inherits Parent Data */
        super();

        /* Sets states default values */
        this.state = {
            /* Set state variables once you know what you want */
            weeklyData: [],
            dailyData: WeatherApi.list[0]
        }
    }


    /* Runs a life cycle that happens whenever the class component is updated */
    componentDidMount = () => {
        /* Constant variable that stores filtered api data from a specific time */
        const weeklyData = WeatherApi.list.filter(reading => reading.dt_txt.includes("00:00:00"))
        /* Updates state with new information */
        this.setState({
            weeklyData: weeklyData
        })
    }

    /* Creates an arrow function */
    formatWeeklyCards = () => {
        /* When function is executed it will return with an arrays data mapped out using an imported component */
        return this.state.weeklyData.map((reading, index) => <Card reading={reading} key={index}/>)
    }

    formatDayCard = () => {
        /* When function is executed it will return with an imported component with data from a state*/
        return <Card reading={this.state.dailyData}/>
    }

    /* Converts data to a web readable format */
    render() {
        /* Data to be executed to the web page */
        return (
            /* Creates a div box */
            <div>
              <div id="displayBox">
                {/* Sets text to heading format 1 */}
                <h1>5 Day Forecast</h1>
                <div id="outerCard">
                    <h2>Cape Town</h2>
                    <h3>Current Weather</h3>
                  {/* Executes function */}
                    {this.formatDayCard()}
                    <h3>Next 5 Days</h3>
                    {this.formatWeeklyCards()}
                </div>
              </div>
            </div>

        )
    }
}

export default App;