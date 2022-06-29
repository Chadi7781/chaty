import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { allUsersRoute } from '../utils/APIRoutes';

function Chat() {


  const navigate = useNavigate();

  const [contacts,setContacts] = useState([]);

  const [currentUser,setCurrentUser] = useState(undefined);

  useEffect(() => { 

    async function  navigate() {
      if(!localStorage.getItem('chat-app-user')) {
        navigate("/login")
      }
      else {
        setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')));
      }
    }

  },[]);

  useEffect(()=> {
    async function fetchData() {
      if(currentUser) {
        if(currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}}`);

          setContacts(data.data);
        }
        else {
          navigate("/setAvatar");
        }
      }


    }
  },[currentUser])

  return (
    <>
    <Container>
      <div className='container'></div>
    </Container>
    
    </>
  );
}

const Container = styled.div`
  
  height: 100vh;
  width: 100vw;
  background-color: #131324;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;

    grid-template-columns: 25%  ;
  }

`

export default Chat