import React from 'react';

import Titles from './components/Titles'
import Submit from './components/Submit'


const API_KEY = 'bc0cb6e0f9779bdd55cfb40f6d7793c3';


class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch (`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=
      ${API_KEY}`);

    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Submit getWeather={this.getWeather}/>
      </div>
    );
  }
};

export default App;
