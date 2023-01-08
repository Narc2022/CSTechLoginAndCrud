import React from 'react'
import { Box, styled } from '@mui/material'
import { useLocation } from 'react-router'


const StyledBox = styled(Box)`
   position: relative;
   top: 70px;
   margin-top: 10vh;
   text-align: center;
   justify-content: center;
   align-item: center;
`

const Admin = () => {
  
  const location = useLocation()
  return (
    <StyledBox component={"h2"}>Welcome to Admin Panel {location.state.id}</StyledBox>
  )
}

export default Admin