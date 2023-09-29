import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from 'jwt-decode';
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  var User = useSelector((state) => state.currentUserReducer);
  useEffect(() => {
    const token=User?.token;
    if(token){
        const Decodedtoken=decode(token);
        if(Decodedtoken.exp * 1000 <new Date().getTime()){
            handleLogout();
        }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..."></input>
          <img
            src={search}
            alt="search"
            width="18px"
            className="searchicon"
          ></img>
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                }}
                to={`Users/${User?.result?._id}`}
                className=""
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
