import React from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Button>
        <BiPowerOff />
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #ededed;

  svg {
    color: black;
    font-size: 1.3rem;
  }
`;
