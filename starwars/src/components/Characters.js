import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-family: The Wild Hammers;
    width: 400px;
    height: 200px;
    align-items: center;
    text-align: center;
    padding: 15px;
    border: .5px solid black;
    border-radius: 10px;
    margin-bottom: 7%;
    background: slategray;
    box-shadow: 5px 5px 5px black;
    `
    

function Characters (props) {
    const {name, gender, height} = props;

    return (
        <div>
            <Container>
                <h1><span>Name: </span>{name}</h1>
                <hr></hr>
                <h3><span>Gender: </span>{gender}</h3>
                <h3><span>Height(in): </span>{height}</h3>
            </Container>

        </div>
    )
}



    

    export default Characters; 