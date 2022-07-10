import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
export default function ChatContainer({ currentUser }) {
  const handleSendMessage = async (message) => {};

  return (
    <>
      <Container>
        <div className="chat-header">
          <div className="user-details">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                alt=""
              />
            </div>
            <div className="username">
              <h3>{currentUser.username}</h3>
            </div>
          </div>
          <Logout />
        </div>

        <div className="chat-messages">
          <ChatInput handleSendMessage={handleSendMessage}></ChatInput>
        </div>
        <div className="chat-input"></div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 1rem;

  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;

      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          font-size: 1rem;
        }
      }
    }
  }
`;
