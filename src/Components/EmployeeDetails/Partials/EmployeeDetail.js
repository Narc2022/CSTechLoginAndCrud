import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(
  UniqueId,
  Image,
  Name,
  Email,
  MobileNo,
  Designation,
  gender,
  Course,
  Createdate,
  Action,
) {
  return {
    UniqueId,
    Image,
    Name,
    Email,
    MobileNo,
    Designation,
    gender,
    Course,
    Createdate,
    Action,
  }
}

const rows = [
  createData(
    1,
    'image',
    'hukum',
    'hcgupta@cstech.in',
    954010044,
    'HR',
    'Male',
    'MCA',
    '2/13/2021',
    { edit: 'Edit', delete: 'Delete' },
  ),
]

export default function EmployeeDetail() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UniqueId</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name&nbsp;</StyledTableCell>
            <StyledTableCell>Email&nbsp;</StyledTableCell>
            <StyledTableCell>MobileNo&nbsp;</StyledTableCell>
            <StyledTableCell>Designation&nbsp;</StyledTableCell>
            <StyledTableCell>gender&nbsp;</StyledTableCell>
            <StyledTableCell>Course&nbsp;</StyledTableCell>
            <StyledTableCell>Createdate&nbsp;</StyledTableCell>
            <StyledTableCell>Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.UniqueId}</StyledTableCell>
              <StyledTableCell>{row.Image}</StyledTableCell>
              <StyledTableCell>{row.Name}</StyledTableCell>
              <StyledTableCell>{row.Email}</StyledTableCell>
              <StyledTableCell>{row.MobileNo}</StyledTableCell>
              <StyledTableCell>{row.Designation}</StyledTableCell>
              <StyledTableCell>{row.gender}</StyledTableCell>
              <StyledTableCell>{row.Course}</StyledTableCell>
              <StyledTableCell>{row.Createdate}</StyledTableCell>
              <StyledTableCell>
                <Button>{row.Action.edit}</Button>
                <Button>{row.Action.delete}</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
