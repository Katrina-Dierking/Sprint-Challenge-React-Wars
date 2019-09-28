import React from "react";
// import styled from "styled-components";

const Container = styled.div`
    

function Characters(props) {
    const {name, gender, height} = props;

    return (
        <div className = "Container">
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>{height}</p>

        </div>
    )
}



    

    export default Characters; 