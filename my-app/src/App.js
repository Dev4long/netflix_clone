import './App.css';
import React from 'react'
import Row from './Row'
import requests from './requests'

class App extends React.Component {
  
  render(){
  
  return (

    <div className="App">
    <Row title = "Netflix Originals" fetchUrl= {requests.fetchNetflixOriginals}/>
    <Row title = "Trending Now" fetchUrl= {requests.fetchTrending}/>
    </div>

  )};
}





export default App;
