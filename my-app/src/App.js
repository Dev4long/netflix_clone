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
    <Row title = "Top Rated" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Action Movies" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Comedy Movies" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Horror Movies" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Romance Movies" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Documentaries" fetchUrl= {requests.fetchTopRated}/>
    </div>

  )};
}


export default App;
