import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand text-uppercase" href="#">TataSky</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="services">Services</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
          </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link class="dropdown-item" to="/add">Add Pack</Link></li>
                <li><Link class="dropdown-item" to="by/cost">All Products</Link></li>
                {/* <li><Link class="dropdown-item" to="delete/by/id/{id}">Delete Pack</Link></li> */}
                <li><Link class="dropdown-item" to="/by/id/{id}">Get Pack</Link></li>
                <li><Link class="dropdown-item" to="/by/cost/admin">Get Pack Admin</Link></li>

              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/channellist">ChanneLlist</Link>
            </li>
            

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
          </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link class="dropdown-item" to="signin">Signin</Link></li>
                <li><Link class="dropdown-item" to="signup">Singup</Link></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Menu