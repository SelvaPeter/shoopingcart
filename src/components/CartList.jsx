import Header from "./Header";
import Link from '@mui/material/Link';
import {
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  Paper,
  Grid,
  Stack,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "./CartContext";
import Footer from "./Footer";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartList = () => {
    const { cart, removeFromCart, updateQuantity} = useCart();
    
      // Calculate total price of the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

    return (
        <>
        <Header />
        <div role="presentation" style={{ marginLeft:"15px"}}>
              <Breadcrumbs aria-label="breadcrumb" >
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                  href="/"
                >
                
                 <HomeIcon/> Home
                </Link>
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                
                >
                <ShoppingCartIcon/>
                  My Cart
                </Link>
               
              </Breadcrumbs>
            </div>
   <Grid container style={{marginBottom:"15px"}}>
  <Grid size={8}>
    <Container maxWidth="md" sx={{ mt: 2,margin:"0px"}} >
      <Typography variant="h6" component="h6" gutterBottom align="center">
        Your Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
          Your cart is empty. Start shopping!
        </Typography>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Paper elevation={6} sx={{ p: 3 ,width:"100%"}}>
              <Typography variant="h5" gutterBottom>
                Cart Items
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {cart.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2, py: 1 }}>
                  <Box sx={{ mr: 2 }}>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      ₹{item.price.toFixed(2)} per item
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mr: 2 }}>
                    <IconButton
                      aria-label="decrease quantity"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      size="small"
                      color="primary"
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body1" sx={{ minWidth: '20px', textAlign: 'center' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      aria-label="increase quantity"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      size="small"
                      color="primary"
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                  <Typography variant="h6" sx={{ minWidth: '90px', textAlign: 'right' }}>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <IconButton
                    aria-label="remove from cart"
                    onClick={() => removeFromCart(item.id)}
                    color="error"
                    sx={{ ml: 2 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </Paper>
          </Grid>

         
        </Grid>
      )}
    </Container>
  </Grid>
  <Grid size={4} >
    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, mt: 6, mr: 4 }}>
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body1">Subtotal ({cart.length} items)</Typography>
                <Typography variant="body1">₹{calculateTotalPrice().toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="body1">Delivery Charges</Typography>
                <Typography variant="body1" color="success.main">Free</Typography> {/* Example */}
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">₹{calculateTotalPrice().toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
                </Grid>
                </Grid>
                
     <Footer/>
    </>
  );
};


export default CartList;