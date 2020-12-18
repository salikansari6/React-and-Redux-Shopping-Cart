import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar({cart}) {
  const classes = useStyles();

 
  const [totalQuantity,setTotalQuantity]=useState(0)

    useEffect(()=>{
      let items = 0
      cart.forEach((product) =>{
        items+=product.quantity
      })

      setTotalQuantity(items)

    },[cart,totalQuantity])
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to='/' style={{textDecoration:"none",color:'white'}}>
            React Cart
          </Link>
          </Typography>
          <Link to='/cart'style={{textDecoration:"none",color:'white'}} >
          <Button color="inherit"><ShoppingCartIcon></ShoppingCartIcon>
            <span>{totalQuantity}</span>
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStateToProps=(state)=>{
  return{
    cart:state.cartReducer.cart
  }
}
export default connect(mapStateToProps)(Navbar)