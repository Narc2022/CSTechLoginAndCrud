import React from 'react'
import { Box, styled } from '@mui/material'
import CreateEmployee from './Partials/CreateEmployee'
import SearchComponent from './Partials/SearchComponent'
import EmployeeDetail from './Partials/EmployeeDetail'
 

const EmployeeDetailsWrapper = styled(Box)`
  position: relative;
  top: 70px;
`

const EmployeeDetails = () => {
  return (
    <EmployeeDetailsWrapper>
        <Box>
            <CreateEmployee />
        </Box>
        <Box>
            <SearchComponent />
        </Box>
        <Box>
            <EmployeeDetail />
        </Box>

    </EmployeeDetailsWrapper>
  )
}

export default EmployeeDetails