import Add from "@mui/icons-material/Add";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
  Button,
  Stack, Box,
   Tooltip
} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Pagination from "@mui/material/Pagination";
import { useCart } from "./CartContext";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon  from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Body = ({searchQuery}) => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1824px)" });
  const isLaptoporDesktop = useMediaQuery({ query: "(min-width:1224px) and (max-width:1823px)" });
  const isTabletorMobile = useMediaQuery({ query: "(max-width:1223px)" });
  const isPortrait = useMediaQuery({ query: "(orientation:portrait)" });

  const [productLists, setProductLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const products = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(products);
        setProductLists(response.data.products);
        } catch (err) {
        //console.log(err.msg);
      }
    };
    fetchProducts();
  }, []);

 

  const [sortOptions, setSortOptions] = useState({
    lowToHigh: false,
    highToLow: false,
    aToZ: false,
    zToA: false,
  });

  const [sortedProducts, setSortedProducts] = useState(productLists);

  useEffect(() => {
    let sorted = [...productLists];
    
      if (searchQuery.trim() !== "") {
    sorted = sorted.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }


    if (sortOptions.lowToHigh) {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOptions.highToLow) {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOptions.aToZ) {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOptions.zToA) {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts(sorted);
  }, [sortOptions, productLists,searchQuery]);

  const handleSortChange = (name) => {
    setSortOptions({
      lowToHigh: name === "lowToHigh",
      highToLow: name === "highToLow",
      aToZ: name === "aToZ",
      zToA: name === "zToA",
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

 

  const { addToCart, cart, removeFromCart, updateQuantity, total } = useCart();
  


  return (
    <>
      <div role="presentation" style={{ marginLeft:"15px"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        
        >
        
         <HomeIcon/> Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/CartList"
        >
        <ShoppingCartIcon/>
          My Cart
        </Link>
       
      </Breadcrumbs>
    </div>
      <Grid container spacing={2} style={{ margin: "15px 15px 15px 15px", backgroundColor: "#f7f7f7" }}>
        {isTabletorMobile &&(
          
              <Grid container spacing={4}  style={{margin:"auto",boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",marginTop:"15px"}}>
   <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" gutterBottom>
                Product Filters
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.lowToHigh}
                      onChange={() => handleSortChange("lowToHigh")}
                    />
                  }
                  label="Price: Low to High"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.highToLow}
                      onChange={() => handleSortChange("highToLow")}
                    />
                  }
                  label="Price: High to Low"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.aToZ}
                      onChange={() => handleSortChange("aToZ")}
                    />
                  }
                  label="Alphabetical: A-Z"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.zToA}
                      onChange={() => handleSortChange("zToA")}
                    />
                  }
                  label="Alphabetical: Z-A"
                />
          </FormGroup>
          </Grid>
</Grid>
        )}
        {isLaptoporDesktop&&
        <Grid size={2}>
           
           <Grid item xs={12} sm={6} md={3}  style={{margin:"auto",boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",marginTop:"15px"}}>
              <Typography variant="h5" gutterBottom>
                Product Filters
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.lowToHigh}
                      onChange={() => handleSortChange("lowToHigh")}
                    />
                  }
                  label="Price: Low to High"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.highToLow}
                      onChange={() => handleSortChange("highToLow")}
                    />
                  }
                  label="Price: High to Low"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.aToZ}
                      onChange={() => handleSortChange("aToZ")}
                    />
                  }
                  label="Alphabetical: A-Z"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sortOptions.zToA}
                      onChange={() => handleSortChange("zToA")}
                    />
                  }
                  label="Alphabetical: Z-A"
                />
          </FormGroup>
          </Grid>
        </Grid>
        }
            <Grid size={10}>
              {/* Pagination */}
              <Pagination
                count={Math.ceil(sortedProducts.length / itemsPerPage)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "right",
                  
                }}
              />
          
                {/* Product Grid */}
              <Grid container spacing={4} >
  {currentItems.map((filterProd) => (
    <Grid item xs={12} sm={6} md={3} key={filterProd.id} style={{ margin: "auto" }}>
      <Tooltip title={filterProd.title} arrow>
      <Card style={{margin:"auto"}}>
        <CardContent>
          
          <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
            {filterProd.title.slice(0, 15)}
            </Typography>
            
          <CardMedia
            component="img"
            height="180"
            image={filterProd.images[0]}
            alt={filterProd.title}
            sx={{ my: 1 , boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",borderRadius: "8px"}}
          />
          <Typography variant="body2" textAlign="center">
            {filterProd.category.toUpperCase()}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Price : ₹{filterProd.price}
          </Typography>
          <Typography variant="body2">
            <strong>Stock:</strong>{" "}
            {cart.find((item) => item.id === filterProd.id)
              ? filterProd.stock - cart.find((item) => item.id === filterProd.id).quantity
              : filterProd.stock}
          </Typography>

          {(cart.find((item) => item.id === filterProd.id)?.quantity || 0) !== 0 ? (
            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 1 }}>
              <IconButton
                aria-label="increase quantity"
                size="small"
                color="success"
                  onClick={() => addToCart(filterProd)}
                  disabled={
                                (cart.find((item) => item.id === filterProd.id)
                                  ? filterProd.stock - cart.find((item) => item.id === filterProd.id).quantity
                                  : filterProd.stock) === 0
                              }
              >
                <AddIcon fontSize="small" />
              </IconButton>
              <Typography variant="body1" sx={{ minWidth: '20px', textAlign: 'center' }}>
                ADD / REMOVE
              </Typography>
              <IconButton
                  aria-label="decrease quantity"
                  
                  // onClick={() => removeFromCart(filterProd.id)}
                   onClick={() =>updateQuantity(
     
      cart.find((item) => item.id === filterProd.id)?.id,
      cart.find((item) => item.id === filterProd.id)?.quantity-1
  )}
                size="small"
                color="success"
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Stack>
          ) : (
            <Box textAlign="center" mt={1}>
              <Button
                startIcon={<Add />}
                size="small"
                variant="contained"
                color="success"
                onClick={() => addToCart(filterProd)}
              >
                Add to Cart
              </Button>
            </Box>
          )}
        </CardContent>
        </Card>
        </Tooltip>
    </Grid>
  ))}
</Grid>
               
              
              {/* Pagination */}
              <Pagination
                count={Math.ceil(sortedProducts.length / itemsPerPage)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "right",
               
                }}
              />
            </Grid>
          </Grid>



    </>
  );
};
export default Body;
