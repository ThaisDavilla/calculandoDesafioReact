import React, { Component } from "react";
import "../styles.css";
import styled from "styled-components";

const Container = styled.section`
  width: 40vw;
  margin: 0 auto;
  background-color: #b56576;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  color: #d8e2dc;
  font-size: 18px;

  nav {
    max-width: 1920px;
    width: 100%;
    margin: auto;
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 600px) {
    background-color: #b56576;
  }
`;

const List = styled.li`
  width: 40%;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: #003459;
    transform: scale(130%);
  }
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Calculando</h1>
        <nav>
          <ul>
            <List>Somando</List>
            <List>Subtraindo</List>
            <List>Multiplicando</List>
            <List>Dividindo</List>
          </ul>
        </nav>
      </Container>
    );
  }
}

export default Header;
