import React from "react";
import { BiHotel } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href='/login'
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            CAPITAL ROOMS <BiHotel className="text-warning" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            {user ? (
              <div class="dropdown m-2">
                <button
                  class="btn btn-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                <FaUserCircle className="text-white"/>  {user.name}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={logout}>
                     Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>  
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              </>
            )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
