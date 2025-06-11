import { Typography } from "@mui/joy";
import { Grid } from "@mui/material";

const Footer = () => {
  const typographyColor = {
    color: "#fff",
    textAlign: "justify",
  };
  return (
    <>
      <div style={{ backgroundColor: "#101010", color: "#fff" }}>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={2} />
        <Grid item xs={12} md={8}>
          <Typography level="body-sm" style={typographyColor}>
            ShippingCart online grocery store: Did you ever imagine that the
            freshest of fruits and vegetables, top-quality pulses and food
            grains, dairy products, and hundreds of branded items could be
            handpicked and delivered to your home, all at the click of a
            button? In today's fast-paced world, smallbasket.com, India's
            pioneering online grocery store, continues to bring a staggering
            array of over 40,000 products from more than 1,000 brands to the
            doorsteps of over 10 million satisfied customers.
          </Typography>

        

         
        </Grid>
        <Grid item xs={12} md={2} />
      </Grid>

     
        <Grid container>
              <Grid
                size={{ xs: 12 }}
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#000",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Typography level="body-md" style={typographyColor}>
                  Copyright © {new Date().getFullYear()}-{new Date().getFullYear()+1} Supermarket Grocery Supplies Pvt Ltd
                </Typography>
              </Grid>
            </Grid>
      
    </div>
    </>
  );
};
export default Footer;
