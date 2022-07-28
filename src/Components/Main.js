import React from "react";
import "../styles.css";
import styled from "styled-components";

const Container = styled.section`
  width: 40vw;
  margin: 0 auto;
  height: 55vh;
  background-color: #b56576;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 5vw;
    height: 5vh;
    border-radius: 5%;
    border: none;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  button {
    width: 3vw;
    height: 3vh;
    border: none;
    border-radius: 10%;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    width: 5vw;
    height: 5vh;
    border: solid 1px;
    border-radius: 10%;
    background-color: white;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
`;

class Main extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: 0
  };

  Change = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  Change2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  Soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2,
      n1: "",
      n2: ""
    });
  };

  Sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2,
      n1: "",
      n2: ""
    });
  };

  Mult = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2,
      n1: "",
      n2: ""
    });
  };

  Divisao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2,
      n1: "",
      n2: ""
    });
  };

  Clear = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: 0,
      n1: "",
      n2: ""
    });
  };

  render() {
    return (
      <Container>
        <input value={this.state.n1} type="number" onChange={this.Change} />
        <input value={this.state.n2} type="number" onChange={this.Change2} />
        <button onClick={this.Soma}>+</button>
        <button onClick={this.Sub}>-</button>
        <button onClick={this.Mult}>*</button>
        <button onClick={this.Divisao}>/</button>
        <button onClick={this.Clear}>C</button>
        <p>{this.state.result}</p>
      </Container>
    );
  }
}

export default Main;
