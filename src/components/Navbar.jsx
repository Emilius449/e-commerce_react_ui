import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar d-flex align-items-center justify-content-between">
      <div className="logo d-flex align-items-center">E Tech World</div>
      <div className="d-flex align-items-center">
        <div className="search d-flex align-items-center">
          <input className="search-input" />
          <Search />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end">
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <span className="lang">EN</span>
      </div>
    </div>
  );
};

export default Navbar;

/* 
If a man is not married at 30, it means that he has not been forced to get married yet. Men don't get married because they want to get married, but because women want to get married.
*/
