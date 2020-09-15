import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.header_nav}>
        <Link to="/">
          <img
            className={classes.header_logo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon Logo"
          />
        </Link>

        <div className={classes.header_search}>
          <Input type="text" />
          <SearchIcon className={classes.header_searchicon} />
        </div>
        <div className={classes.header_links}>
          <Link to="/login">
            <div className={classes.header_options}>
              <span className={classes.header_optionslineone}>Hello</span>
              <span className={classes.header_optionslinetwo}>Signup</span>
            </div>
          </Link>
        </div>
        <div className={classes.header_links}>
          <Link to="/">
            <div className={classes.header_options}>
              <span className={classes.header_optionslineone}>Returns</span>
              <span className={classes.header_optionslinetwo}>&Orders</span>
            </div>
          </Link>
        </div>
        <div className={classes.header_links}>
          <Link to="/">
            <div className={classes.header_options}>
              <span className={classes.header_optionslineone}>Your</span>
              <span className={classes.header_optionslinetwo}>Prime</span>
            </div>
          </Link>
        </div>
        <Link to="/checkout">
          <div className={classes.header_optionsBasket}>
            <ShoppingCartIcon />
            <span
              className={`${classes.header_optionslinetwo} ${classes.header_basketCount}`}
            >
              0
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
