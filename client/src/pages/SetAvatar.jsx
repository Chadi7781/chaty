import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Buffer } from "buffer";

import loader from "../assets/loader.gif";
export default function SetAvatar() {
  const api = "https://api.multiavatar.com/456789945";
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const setProfilePicture = async () => {};

  useEffect(() => {
    async function fetchData() {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );

        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }

      setAvatars(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <div className="title-container">
        <h1>Pick an avatar as your profile picture</h1>
      </div>
      <div className="avatars">
        {avatars.map((avatar, index) => {
          return (
            <div
              key={index}
              className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
            >
              <img
                src={`data:image/svg+xml;base64,${avatar}`}
                alt="avatar"
                onClick={() => setSelectedAvatar(index)}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 3rem;
background-color: #131324;
height: 100vh;
width: 100vw;

.title-container {
    h1 {
        color:white;
    }
}

.avatars {
    display: flex;
    gap: 2rem;

    .avatar {
        border: 0.4rem solid transparent;
        img {
            height: 6rem;
        }
    }

}


`;
