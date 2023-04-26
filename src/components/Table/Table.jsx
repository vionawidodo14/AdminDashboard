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



const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {

    const [transactions, setTransactions] = useState({})
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/transaction.json').then((res) => res.json()).then(json => setTransactions(json));
    }


    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029", }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Restaurant</TableCell>
                            <TableCell>Products</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Total Price</TableCell>
                            <TableCell align="left">Email</TableCell>
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
                                <TableCell align="left">{transactions[id].items.map(i => <p>{i.title} {i.quantity}x - ${i.price} </p>)}</TableCell>
                                <TableCell align="left">{transactions[id].type}</TableCell>
                                <TableCell align="left">{transactions[id].totalPrice}</TableCell>
                                <TableCell align="left">{transactions[id].user}</TableCell>
                                <TableCell align="left" className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}