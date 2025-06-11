import { Link } from "react-router-dom";

const AppBar = () => {


  return (
  <>
   
      <div style={{ fontSize: "20px" ,marginRight:"20px",textAlign:"center"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ color: "#ff0000" }}>S</span>
          <span style={{ color: "#000" }}>hopping</span>
          <span style={{ color: "#ff0000" }}>C</span>
          <span style={{ color: "#000" }}>art</span>
        </Link>
      </div>
      
    </>
  );
};

export default AppBar;
