import { Button, Box, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
`

const CreateEmployee = () => {
  return (
    <StyledBox>
        <Typography>Total Count: 4</Typography>
        <Link style={{textDecoration:'none'}} to='/create-employee'><Button style={{ height: 25}}>Create Employee</Button></Link>
    </StyledBox>
  )
}

export default CreateEmployee