import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge } from "@mui/joy";
import { useCart } from "./CartContext";
import SBAppBar from "./AppBar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "#fff",
  zIndex: 0,
  minHeight: 55,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  border: "1px solid #d5d5d5",
  color: "grey",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  color: "green",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "12px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
  },
}));
export default function Header({ searchQuery, setSearchQuery }) {
  const { cart } = useCart();
  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000, bgcolor: "#fff"}}>
      {/* Optional green border on top */}
      <Box sx={{ borderTop: "2.5px solid #5e9400" }} />

        <AppBar position="static" elevation={0} sx={{ bgcolor: "#fff", justifyContent: 'center' }}>
          
        <StyledToolbar style={{margin:"0px 20px 0px 20px"}}>
          <Grid container alignItems="center" spacing={1} sx={{ px: 2 }}>
            <Grid xs={12} sm="auto">
              <SBAppBar />
            </Grid>

            <Grid>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for Products..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Search>
            </Grid>

            <Grid xs="auto">
              <Link to="/CartList">
                <Badge badgeContent={cart.length} color="success">
                  <LocalMallIcon
                    sx={{
                      color: "#d63333",
                      mx: 1,
                      p: "3.5px",
                      border: "1px solid grey",
                      borderRadius: "3px",
                      bgcolor: "#fae6e6",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </Link>
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>
    </Box>
      
      </>
  );
}
