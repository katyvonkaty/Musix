import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";



export default class Navbar extends Component {


  render() {

    return (
      <Menu secondary>
      <Link to="/tracks">  <Menu.Item name="home"  /> </Link>



        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <Button> <Link to="/login"> Logout </Link></Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
