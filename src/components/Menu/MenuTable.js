import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function RestaurantTable() {

  const [transactions, setTransactions] = useState({})
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/menu.json').then((res) => res.json()).then(json => setTransactions(json));
  }


  return (
    <div className="Table">

      <Link to='create-menu'>
        <Button variant="contained" >Create Menu</Button>
      </Link>
      <br /> <br />
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Restaurant</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="left">Base Price</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {Object.keys(transactions).map((id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transactions[id].restaurantName}
                </TableCell>
                <TableCell align="left">{transactions[id].title}</TableCell>
                <TableCell align="left">{transactions[id].basePrice}</TableCell>
                <TableCell align="left">${transactions[id].price}</TableCell>
                <TableCell align="left">{transactions[id].category}</TableCell>
                <TableCell align="left" className="Details">
                  <Link to={`create-menu?id=${id}`}>
                    <Button variant="contained" >Edit</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}