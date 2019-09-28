import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-family: The Wild Hammers;
    width: 150px;
    height: 200px;
    text-align: center;
    padding: 20px;
    border: .5px solid black;
    border-radius: 10px;
    margin-bottom: 7%;
    background: grey;
    `
    
    

function Characters(props) {
    const {name, gender, height} = props;

    return (
        <div>
            <Container>
                <h2><span>Name:</span>{name}</h2>
                <h3><span>Gender:</span>{gender}</h3>
                <h3><span>Height (in):</span>{height}</h3>
            </Container>

        </div>
    )
}



    

    export default Characters; 