import React, { useState, useEffect } from 'react'
import {
  Box,
  styled,
  TextField,
  Button,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  Typography,
  IconButton,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  InputLabel,
} from '@mui/material'

const RegisterWrapper = styled(Box)`
  position: relative;
  top: 70px;
  display: flex;
  justify-content: center;
`

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
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: white;
  height: 48px;
  border-radius: 2px;
`

const RegisterEmployee = () => {
  const [designation, setDesignation] = useState()
  
  useEffect(() => {
    setDesignation()
  }, []);

  return (
    <RegisterWrapper>
      <Wrapper>
        <TextField variant="standard" label="Enter Name" />
        <TextField variant="standard" name="Email" label="Enter Email" />
        <TextField variant="standard" label="Mobile" type="number" />
        <FormControl fullWidth>
          <InputLabel variant="standard">Select Designation</InputLabel>
          <Select
            value={designation}
            variant="standard"
            label=""
            // onChange={handleChange}
          >
            <MenuItem value={'HR'}>HR</MenuItem>
            <MenuItem value={'Manager'}>Manager</MenuItem>
            <MenuItem value={'Sales'}>Sales</MenuItem>
          </Select>
        </FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          style={{ marginTop: 10 }}
        >
          Gender
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <FormGroup>
          <Typography variant="h6">Course</Typography>
          <FormControlLabel control={<Checkbox />} label="BCA" />
          <FormControlLabel control={<Checkbox />} label="MCA" />
          <FormControlLabel control={<Checkbox />} label="BSC" />
        </FormGroup>

        <Button variant="contained" component="label" style={{ marginTop: 10 }}>
          Image Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
        </IconButton>
        <LoginButton>Submit</LoginButton>
      </Wrapper>
    </RegisterWrapper>
  )
}

export default RegisterEmployee
