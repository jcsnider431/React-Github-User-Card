import React from 'react';
import axios from 'axios';
import './App.css';
import { render } from '@testing-library/react';
import UserCard from './Components/UserCard'



class App extends React.Component {
  state = {
    user: [],
    name: "",

  
  }


componentDidMount() {
  axios.get("https://api.github.com/users/jcsnider431")
       .then((res)=>{
         console.log(res, "works!")
         this.setState({
           user: res.data,
         });
       })
       .catch((err)=>{
         console.log(err);
       });
}
handleChange = (e) =>{
  this.setState({
    name: e.traget.value,
  });
}
handleClick = (e) =>{
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.user}`)
}

render() {
  return(

    <div className="App">
      <header className="App-header">
      </header>
        <form className="form">
          <input onChange={this.handleChange} type='text'/>
          <button onClick={this.handleClick}>Search</button>
          </form>
       <UserCard {...this.state.user}  />
       
      
    </div>
  );
}
}
export default App;
