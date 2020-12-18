import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../actions'



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CartItem({productName,imgURL,quantity,price}) {
  const classes = useStyles();
  const [totalPrice,setTotalPrice] = useState(0)

  const dispatch = useDispatch()

  useEffect(()=>{
    let tempPrice=0
    tempPrice=quantity*price
    setTotalPrice(tempPrice)
  },[quantity,price])

  return (
    <Card className={classes.root}>
      <CardHeader
        title={productName}  fontWeight="fontWeightBold" style={{textAlign:'center',textTransform:'capitalize'}}
        />
      <CardMedia
        className={classes.media}
        image={imgURL}
        title="Paella dish"
      />
      <CardContent style={{textAlign:'center'}}>
        <Typography variant="h5" component="p">
          Quantity : {quantity}
        </Typography>
        <Typography variant="h5" component="p">
          Price : {totalPrice}
        </Typography>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<RemoveShoppingCartIcon />}
        onClick={()=>dispatch(removeFromCart(productName))}
      >
        Remove
      </Button>
      </CardContent>
    </Card>
  );
}
