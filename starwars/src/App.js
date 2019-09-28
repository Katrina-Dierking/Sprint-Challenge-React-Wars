import React, {useState, useEffect} from 'react';
import axios from "axios";
import Characters from "./components/Characters.js";
import styled from "styled-components";
import './App.css';


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5%;
  align-items: center;
  `

  const Header = styled.h1`
    font-family: The Wild Hammers;
    padding: 3%;
    font-size: 60px;
    color: solid black;
    background: slategray;
    border: 1px solid black;
    box-shadow: 5px 5px 5px black;
  `
    

  const App = () => {

    const [character, setCharacter] = useState([])

    useEffect (() => {
      axios.get ('https://swapi.co/api/people')
      .then (response => {
        console.log (response);
        setCharacter (response.data.results);
      })

      .catch (error => {
        console.log (error);
      })

    },[])

  return (
    <div className="App">
      <Header>React Wars: Let the Games Begin!</Header>
     
        <Container>
                {character.map (character => (
                  <Characters name = {character.name} gender = {character.gender} height = {character.height}/>
                ))}
                </Container>
        
    </div>
  );
}

export default App;
