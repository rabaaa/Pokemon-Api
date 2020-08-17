import React, { Component } from 'react'
import '../../App.css';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top"
       >
        <a href="#" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">PokemonApi</a>

        </nav>
      </div>
    )
  }
}
