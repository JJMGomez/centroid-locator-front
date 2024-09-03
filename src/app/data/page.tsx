'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let rows: any[] = [];

const App = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
     fetch('http://127.0.0.1:5000/weldingInfo' ,
      {
        method: 'GET',
        mode: 'cors'
      }
     )
        .then((response) => response.json())
        .then((data) => {
          setContent(data);
          rows = data
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

return (
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>参数</TableCell>
        <TableCell align="right">数值</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.data}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
);
};
export default App;

