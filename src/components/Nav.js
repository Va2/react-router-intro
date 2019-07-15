import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
          <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a class="navbar-brand" href="#">
                Carousel
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                  <Link to='/' >
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                  </Link>
                  <Link to='/about'>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        About
                      </a>
                    </li>
                  </Link>
                  <Link to='/shop'>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Shop
                      </a>
                    </li>
                  </Link>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </header>
        );
    }
}

export default Nav;