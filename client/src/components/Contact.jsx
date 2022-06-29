import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo-chat.svg";

export default function Contact({ contacts, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUseImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    console.log(contacts);
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
            <h3>Snappy</h3>
          </div>

          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h1>{currentUserName}</h1>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`

display:grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden;
background-color: #080420;

.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
        height: 2rem;
    }
    h3  {
        color: white;
        text-transform: uppercase;
    }
}

.contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:auto;
    gap: 0.8rem;
    .contact {
        background-color: #ffffff39;
    }
}


`;
