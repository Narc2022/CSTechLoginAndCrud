import React, { useState } from "react";
import { Box, TextField, styled, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const StyleBox = styled(Box)`
  position: relative;
  top: 70px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  width: 500px;
  max-width: 500px;
  flex: 1;
  & div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: white;
  height: 48px;
  border-radius: 2px;
`;
const LoginPage = () => {
  const history = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  console.log({
    password,
    username
  })

  async function submit(e){
    e.preventDefault()

    try{
        await axios.post('http://localhost:8000/',{
          username,
          password
        }).then(res=>{
          if(res.data==="exist"){
             history("/admin",{state:{id:username}})
          }
          else if(res.data==="notexist"){
            alert("user is not exist")
         }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e)
        })
    }catch(e){
          console.log(e)
    }
  }
  return (
    <StyleBox>
      <Wrapper>
        <TextField
          variant="standard"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={username}
          name="username"
          label="Enter Username"
        />
        <TextField
          variant="standard"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          name="password"
          label="Enter Password"
        />

        <LoginButton
        onClick={submit}
        >
          Login
        </LoginButton>
      </Wrapper>
    </StyleBox>
  );
};

export default LoginPage;
