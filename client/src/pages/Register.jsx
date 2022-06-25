import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
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
          <img src={Logo} alt="" style={{width:'20px'}} />
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
  flex-direction:   column;
  justify-content: center;
  gap:1rem;
  
`;
export default Register;
