import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux' 
import './Bill.css'




export default function Bill({displayTotalPrice}) {
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    
    const classes = useStyles();
    const cart = useSelector(state=>state.cartReducer.cart)
    
    function createData(name, price, quantity,totalPrice) {
      return { name, price,quantity,totalPrice };
    }
    
    const rows=cart.map((product)=>{
        return createData(product.productName,product.price,product.quantity,product.price*product.quantity)
    })
    
  return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
          <div className='bill-heading'>
            <h1 style={{marginLeft:'1rem'}}>Receipt</h1>
          </div>
            </TableCell>
          </TableRow>
          </TableHead>
        <TableHead>
          <TableRow >
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
            </TableRow>
          ))}
          <TableRow>
              <TableCell colSpan={4}>
              <div className="total-price">Grand Total : Rs {displayTotalPrice}</div>
            </TableCell> 
              
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
