import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo-chat.svg";
function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={Logo} alt="" />
          <h1>Snappy</h1>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your password"
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Create user</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 3rem;
      width:3rem;

    }
    h1 {
      color:white;
      text-transform: uppercase;
    }
  }
  form {
    display:flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      color: white;
      border-radius: 0.4rem;
      width: 100%;  
      font-size: 1rem;

      &:focus {
        border:0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color:white;
      padding:1rem 2rem;
      border:none;
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 0.4rem;
      transition: 0.2s ease-in-out;
      &:hover {
      background-color:#4e0eff;
    }
  }
  span {
    color:white;
    text-transform: uppercase;

    a {
      text-decoration: none;
      font-weight: bold;
      color:#4e0eff;

    }
  }
    
  }
`;
export default Register;
