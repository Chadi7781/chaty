import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo-chat.svg";

export default function Contact({ contacts, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUseImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      setCurrentUseImage(currentUser.avatarImage);
    }
  }, [currentUser]);
  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>Snappy</h1>
          </div>
        </Container>
      )}
    </>
  );
}


const Container = styled.div``;
